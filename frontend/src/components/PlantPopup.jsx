import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlantPopup = ({
  isOpen,
  plant,
  onClose,
  notes,
  setNotes,
  handleDownloadNotes,
  handleShare,
}) => {
  const [selectedTab, setSelectedTab] = useState("multimedia");

  if (!isOpen || !plant) return null;

  const tabs = ["multimedia", "Overview", "Medicinal", "Research", "Nutrition", "More"];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "multimedia":
        return (
          <div className="space-y-4">
            {/* 3D Model */}
            {plant.sketchfabModelUrl?.trim() && (
              <div className="w-full overflow-hidden rounded-lg shadow">
                <iframe
                  title={plant.name}
                  src={plant.sketchfabModelUrl.trim()}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-52 md:h-64 rounded-lg"
                ></iframe>
              </div>
            )}

            {/* Multimedia Carousel */}
            <div className="overflow-x-auto whitespace-nowrap mt-4">
              {Array.isArray(plant.multimedia) &&
                plant.multimedia.map((media, index) => (
                  <div key={index} className="inline-block mr-3">
                    {media.endsWith(".mp4") ? (
                      <video
                        controls
                        src={media}
                        className="h-36 w-60 md:h-44 md:w-72 rounded-lg shadow"
                      ></video>
                    ) : (
                      <img
                        src={media}
                        alt={`Multimedia ${index + 1}`}
                        className="h-36 w-60 md:h-44 md:w-72 object-cover rounded-lg shadow"
                      />
                    )}
                  </div>
                ))}

              {/* YouTube Video */}
              {plant.youtubeUrl?.trim() && (
                <div className="inline-block mr-3">
                  <iframe
                    className="h-36 w-60 md:h-44 md:w-72 rounded-lg shadow"
                    src={plant.youtubeUrl.trim()}
                    frameBorder="0"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
              )}
            </div>

            {/* Fallback */}
            {(!plant.multimedia || plant.multimedia.length === 0) &&
              !plant.youtubeUrl && (
                <p className="text-gray-500">No multimedia content available.</p>
              )}
          </div>
        );

      case "Overview":
        return (
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Region:</strong> {plant.region}</p>
            <p><strong>Type:</strong> {plant.type}</p>
            <p><strong>Common Names:</strong> {plant.commonNames}</p>
            <p><strong>Habitat:</strong> {plant.habitat}</p>
            <p><strong>Botanical Name:</strong> {plant.botanicalName}</p>
          </div>
        );

      case "Medicinal":
        return (
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Medicinal Uses:</strong> {plant.medicinalUses}</p>
            <p><strong>Methods of Cultivation:</strong> {plant.methodsOfCultivation}</p>
            <p><strong>Extraction Process:</strong> {plant.ExtractionProcess}</p>
          </div>
        );

      case "Research":
        return (
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Scientific Research:</strong> {plant.scientificResearchAndStudies}</p>
            <p><strong>Side Effects & Risks:</strong> {plant.sideEffectsAndRisks}</p>
            <p><strong>Environmental Impact:</strong> {plant.environmentalImpact}</p>
          </div>
        );

      case "Nutrition":
        return (
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Nutritional Benefits:</strong> {plant.nutritionalBenefits}</p>
            <p><strong>Products:</strong> {plant.Products}</p>
            <p><strong>Traditional Medicine:</strong> {plant.TraditionalMedicine}</p>
          </div>
        );

      case "More":
        return (
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Grow Outdoors:</strong> {plant.reasonsToGrowOutdoors}</p>
            <p><strong>Grow Indoors:</strong> {plant.reasonstoGrowIndoors}</p>
            <p><strong>Commercial & Industrial Uses:</strong> {plant.commercialAndIndustrialUses}</p>
            <p><strong>Consideration For Both:</strong> {plant.considerationForBothSettings}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-600 z-10"
        >
          &times;
        </button>

        {/* Header Info */}
        <div className="p-6 pt-10 text-center">
          <h2 className="text-2xl font-bold text-green-700">{plant.name}</h2>
          <p className="text-gray-500 text-sm">{plant.botanicalName}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 flex-wrap border-b px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                selectedTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-4 flex-1">
          {renderTabContent()}

          {/* Audio */}
          {plant.audioFile && (
            <audio
              src={plant.audioFile}
              controls
              className="w-full mt-4 bg-gray-100 rounded-full"
            ></audio>
          )}

          {/* Notes */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Your Notes:</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Write your thoughts..."
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button onClick={handleDownloadNotes} className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-500 transition">
              <i className="fa-solid fa-download mr-2"></i>Download
            </button>
            <button onClick={handleShare} className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-500 transition">
              <i className="fa-solid fa-share mr-2"></i>Share
            </button>
            <Link to="/community">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                <i className="fa-regular fa-comment mr-2"></i>Comment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantPopup;
