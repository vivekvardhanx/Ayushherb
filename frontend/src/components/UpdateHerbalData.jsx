import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

function UpdateHerbalData() {
  const [disease, setDisease] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [allDiseases, setAllDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [form, setForm] = useState({ herb: "", usedFor: "", preparation: "", dosage: "", caution: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all diseases for auto-suggest
  useEffect(() => {
    const fetchDiseases = async () => {
      const snapshot = await getDocs(collection(firestore, "herbalRecommendations"));
      const diseases = snapshot.docs.map((doc) => doc.id);
      setAllDiseases(diseases);
    };
    fetchDiseases();
  }, []);

  // Fetch recommendations for selected disease
  const fetchRecommendations = async (diseaseName) => {
    setLoading(true);
    const cleanName = diseaseName.toLowerCase().trim();
    const docRef = doc(firestore, "herbalRecommendations", cleanName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setRecommendations(docSnap.data().recommendations || []);
      setSelectedDisease(cleanName);
    } else {
      setRecommendations([]);
      setSelectedDisease(cleanName);
    }
    setLoading(false);
  };

  // Handle disease input change and auto-suggest
  const handleDiseaseChange = (e) => {
    setDisease(e.target.value);
    setSelectedDisease(null);
    setRecommendations([]);
  };

  // Handle form input change
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update recommendation
  const handleAddRecommendation = async (e) => {
    e.preventDefault();
    if (!disease) return alert("Please enter a disease name.");
    const cleanName = disease.toLowerCase().trim();
    const newRecs = [...recommendations, form];
    const docRef = doc(firestore, "herbalRecommendations", cleanName);
    await setDoc(docRef, { disease: cleanName, recommendations: newRecs });
    setRecommendations(newRecs);
    setForm({ herb: "", usedFor: "", preparation: "", dosage: "", caution: "" });
    setSelectedDisease(cleanName);
    if (!allDiseases.includes(cleanName)) setAllDiseases([...allDiseases, cleanName]);
    alert("Recommendation added/updated!");
  };

  // Select a disease from the list
  const handleSelectDisease = (diseaseName) => {
    const cleanName = diseaseName.toLowerCase().trim();
    setDisease(cleanName);
    fetchRecommendations(cleanName);
  };

  // Remove a recommendation
  const handleRemoveRecommendation = async (index) => {
    const cleanName = disease.toLowerCase().trim();
    const newRecs = recommendations.filter((_, i) => i !== index);
    const docRef = doc(firestore, "herbalRecommendations", cleanName);
    await setDoc(docRef, { disease: cleanName, recommendations: newRecs });
    setRecommendations(newRecs);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Herbal Recommendations</h2>
      <div className="mb-4">
        <input
          className="border p-2 rounded w-full"
          placeholder="Enter or select a disease (e.g. cough, fever)"
          value={disease}
          onChange={handleDiseaseChange}
          list="disease-list"
        />
        <datalist id="disease-list">
          {allDiseases.map((d) => (
            <option key={d} value={d} />
          ))}
        </datalist>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleSelectDisease(disease)}
          disabled={!disease}
        >
          Load Recommendations
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {selectedDisease && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Current Recommendations for <span className="text-green-700">{selectedDisease}</span>:</h3>
          {recommendations.length === 0 && <div className="text-gray-500">No recommendations yet.</div>}
          <ul className="space-y-2">
            {recommendations.map((rec, idx) => (
              <li key={idx} className="bg-green-50 p-3 rounded flex flex-col md:flex-row md:items-center md:justify-between">
                <span>
                  <b>{rec.herb}</b> - {rec.usedFor} | <i>{rec.preparation}</i> | <b>Dosage:</b> {rec.dosage} {rec.caution && <span className="text-red-600">| Caution: {rec.caution}</span>}
                </span>
                <button
                  className="text-red-600 hover:underline mt-2 md:mt-0"
                  onClick={() => handleRemoveRecommendation(idx)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleAddRecommendation} className="space-y-3 bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Add/Edit Recommendation</h4>
        <input
          className="border p-2 rounded w-full"
          name="herb"
          placeholder="Herb Name"
          value={form.herb}
          onChange={handleFormChange}
          required
        />
        <input
          className="border p-2 rounded w-full"
          name="usedFor"
          placeholder="Used For"
          value={form.usedFor}
          onChange={handleFormChange}
          required
        />
        <input
          className="border p-2 rounded w-full"
          name="preparation"
          placeholder="Preparation"
          value={form.preparation}
          onChange={handleFormChange}
          required
        />
        <input
          className="border p-2 rounded w-full"
          name="dosage"
          placeholder="Dosage"
          value={form.dosage}
          onChange={handleFormChange}
          required
        />
        <input
          className="border p-2 rounded w-full"
          name="caution"
          placeholder="Caution (optional)"
          value={form.caution}
          onChange={handleFormChange}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded w-full mt-2"
        >
          Add/Update Recommendation
        </button>
      </form>
    </div>
  );
}

export default UpdateHerbalData;
