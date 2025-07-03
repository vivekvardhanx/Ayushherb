import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

const plantData = [
  {
    _id: "tulsi",
    name: "Tulsi (Holy Basil)",
    region: "India, Southeast Asia",
    type: "Herb",
    commonNames: "Holy Basil, Ocimum sanctum",
    habitat: "Gardens, temples, homes",
    botanicalName: "Ocimum tenuiflorum",
    imageSrc: "/images/tulsi.png",
    audioFile: "/audio/tulsi.mp3",
    youtubeUrl: "https://www.youtube.com/embed/8Oxw4BgqQ2Y",
    sketchfabModelUrl: "https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed?ui_hint=2",
    multimedia: [
      "/images/tulsi2.png",
      "/images/tulsi3.png",
      "/images/tulsi4.png"
    ],
    medicinalUses: "Boosts immunity, relieves stress, supports respiratory health.",
    methodsOfCultivation: "Grows best in warm climates with well-drained soil.",
    ExtractionProcess: "Leaves are dried and used for tea or extracts.",
    scientificResearchAndStudies: "Studies show anti-inflammatory and adaptogenic properties.",
    sideEffectsAndRisks: "Generally safe, but may affect fertility in large amounts.",
    environmentalImpact: "Attracts pollinators and improves air quality.",
    nutritionalBenefits: "Rich in vitamins A and C, calcium, zinc.",
    Products: "Tulsi tea, supplements, essential oil.",
    TraditionalMedicine: "Used in Ayurveda for centuries.",
    otherInfo: "Considered sacred in Hinduism."
  },
  {
    _id: "aloevera",
    name: "Aloe Vera",
    region: "Tropical, Subtropical",
    type: "Succulent",
    commonNames: "Aloe, Ghritkumari",
    habitat: "Dry, arid regions, pots, gardens",
    botanicalName: "Aloe barbadensis miller",
    imageSrc: "/images/aloevera.png",
    audioFile: "/audio/aloe vera.mp3",
    youtubeUrl: "https://www.youtube.com/embed/8Oxw4BgqQ2Y",
    sketchfabModelUrl: "https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?autospin=1&autostart=1&ui_hint=2&ui_infos=0&ui_controls=1",
    multimedia: [
      "/images/aloevera2.png",
      "/images/aloevera3.png",
      "/images/aloevera4.png"
    ],
    medicinalUses: "Soothes burns, aids digestion, moisturizes skin.",
    methodsOfCultivation: "Requires minimal water, grows in sandy soil.",
    ExtractionProcess: "Gel is extracted from leaves.",
    scientificResearchAndStudies: "Research supports wound healing and skin hydration.",
    sideEffectsAndRisks: "Excessive oral use may cause diarrhea.",
    environmentalImpact: "Drought-resistant, easy to grow.",
    nutritionalBenefits: "Contains vitamins, minerals, amino acids.",
    Products: "Aloe gel, juice, creams.",
    TraditionalMedicine: "Used in Ayurveda and traditional Chinese medicine.",
    otherInfo: "Popular in cosmetics and health drinks."
  },
  {
    _id: "ashwagandha",
    name: "Ashwagandha",
    region: "India, Middle East",
    type: "Herb",
    commonNames: "Indian Ginseng, Winter Cherry",
    habitat: "Dry regions, cultivated fields",
    botanicalName: "Withania somnifera",
    imageSrc: "/images/ashwagandha.jpg",
    audioFile: "/audio/ashwaganda.mp3",
    youtubeUrl: "https://www.youtube.com/embed/OE14JsyuEII",
    sketchfabModelUrl: "https://sketchfab.com/models/88b1bf03a6254dc2b56cec4dce3f22f1/embed?ui_hint=2",
    multimedia: [
      "/images/ashwagandha2.png",
      "/images/ashwagandha3.png",
      "/images/ashwagandha4.png"
    ],
    medicinalUses: "Reduces stress, improves strength, boosts brain function.",
    methodsOfCultivation: "Grows in sandy, well-drained soil.",
    ExtractionProcess: "Roots are dried and powdered.",
    scientificResearchAndStudies: "Shown to reduce cortisol and improve cognition.",
    sideEffectsAndRisks: "May cause stomach upset in some people.",
    environmentalImpact: "Low water requirement, sustainable crop.",
    nutritionalBenefits: "Contains withanolides, iron, antioxidants.",
    Products: "Ashwagandha powder, capsules, tea.",
    TraditionalMedicine: "Key herb in Ayurveda.",
    otherInfo: "Used for vitality and longevity."
  },
  {
    _id: "cactus",
    name: "Cactus",
    region: "Deserts",
    type: "Succulent",
    commonNames: "Prickly Pear, Nopal",
    habitat: "Desert, arid landscapes",
    botanicalName: "Opuntia",
    imageSrc: "/images/cactus.png",
    audioFile: "/audio/cactus.mp3",
    youtubeUrl: "https://www.youtube.com/embed/Uds_rPbFkpU",
    sketchfabModelUrl: "https://sketchfab.com/models/01d773057954447a9abb7ae0c6c052af/embed?ui_hint=2",
    multimedia: [
      "/images/cactus2.png",
      "/images/cactus3.png",
      "/images/cactus4.png"
    ],
    medicinalUses: "Supports hydration, may lower blood sugar.",
    methodsOfCultivation: "Thrives in sandy, dry soil with little water.",
    ExtractionProcess: "Pads and fruit are harvested and cleaned.",
    scientificResearchAndStudies: "Some studies show anti-inflammatory effects.",
    sideEffectsAndRisks: "May cause mild digestive upset.",
    environmentalImpact: "Prevents soil erosion, drought-tolerant.",
    nutritionalBenefits: "Rich in fiber, vitamin C, magnesium.",
    Products: "Cactus juice, supplements, food dishes.",
    TraditionalMedicine: "Used in Mexican folk medicine.",
    otherInfo: "Edible pads and fruit."
  },
  {
    _id: "dandelion",
    name: "Dandelion",
    region: "Temperate Zones",
    type: "Flowering Plant",
    commonNames: "Lion's Tooth, Blowball",
    habitat: "Meadows, lawns, roadsides",
    botanicalName: "Taraxacum officinale",
    imageSrc: "/images/dandelion2.png",
    audioFile: "/audio/dandelion.mp3",
    youtubeUrl: "https://www.youtube.com/embed/8Oxw4BgqQ2Y",
    sketchfabModelUrl: "https://sketchfab.com/models/8a93f08947a4499b9ed19d2d47323242/embed?ui_hint=2",
    multimedia: [
      "/images/dandelion2.png",
      "/images/dandelion3.png",
      "/images/dandelion4.png"
    ],
    medicinalUses: "Supports liver health, acts as a diuretic.",
    methodsOfCultivation: "Grows easily in most soils, full sun preferred.",
    ExtractionProcess: "Roots and leaves are dried for tea or extracts.",
    scientificResearchAndStudies: "Research supports diuretic and antioxidant effects.",
    sideEffectsAndRisks: "May cause allergic reactions in some people.",
    environmentalImpact: "Helps aerate soil, supports pollinators.",
    nutritionalBenefits: "High in vitamins A, C, K, and minerals.",
    Products: "Dandelion tea, salads, supplements.",
    TraditionalMedicine: "Used in traditional European and Chinese medicine.",
    otherInfo: "Entire plant is edible."
  },
  {
    _id: "eucalyptus",
    name: "Eucalyptus",
    region: "Australia",
    type: "Tree",
    commonNames: "Gum Tree, Blue Gum",
    habitat: "Forests, plantations",
    botanicalName: "Eucalyptus globulus",
    imageSrc: "/images/eucalyptus.png",
    audioFile: "/audio/eucalyptus.mp3",
    youtubeUrl: "https://www.youtube.com/embed/4W44xiXvUAI",
    sketchfabModelUrl: "https://sketchfab.com/models/d021e7909df44e03b976c1374bfab9dc/embed?ui_hint=2",
    multimedia: [
      "/images/eucalyptus2.png",
      "/images/eucalyptus3.png",
      "/images/eucalyptus4.png"
    ],
    medicinalUses: "Relieves cold symptoms, used in balms and oils.",
    methodsOfCultivation: "Requires full sun, well-drained soil.",
    ExtractionProcess: "Leaves are steam-distilled for oil.",
    scientificResearchAndStudies: "Eucalyptus oil shown to have antimicrobial effects.",
    sideEffectsAndRisks: "Oil is toxic if ingested in large amounts.",
    environmentalImpact: "Fast-growing, can deplete soil moisture.",
    nutritionalBenefits: "Not typically consumed as food.",
    Products: "Eucalyptus oil, lozenges, ointments.",
    TraditionalMedicine: "Used by Australian aboriginals.",
    otherInfo: "Popular in aromatherapy."
  },
  {
    _id: "ginger",
    name: "Ginger",
    region: "South Asia",
    type: "Rhizome",
    commonNames: "Adrak, Zingiber",
    habitat: "Tropical, subtropical regions",
    botanicalName: "Zingiber officinale",
    imageSrc: "/images/ginger.png",
    audioFile: "/audio/ginger.mp3",
    youtubeUrl: "https://www.youtube.com/embed/-mUeNy0rweM",
    sketchfabModelUrl: "https://sketchfab.com/models/de8da99c3c1742708cd4ea858750b881/embed?ui_hint=2",
    multimedia: [
      "/images/ginger2.png",
      "/images/ginger3.png",
      "/images/ginger4.png"
    ],
    medicinalUses: "Aids digestion, relieves nausea, anti-inflammatory.",
    methodsOfCultivation: "Grows in moist, well-drained soil.",
    ExtractionProcess: "Rhizomes are harvested and dried or juiced.",
    scientificResearchAndStudies: "Proven to reduce nausea and inflammation.",
    sideEffectsAndRisks: "May cause heartburn in some people.",
    environmentalImpact: "Requires moderate water, easy to grow.",
    nutritionalBenefits: "Contains gingerol, vitamin B6, magnesium.",
    Products: "Ginger tea, powder, candies.",
    TraditionalMedicine: "Used in Ayurveda and Chinese medicine.",
    otherInfo: "Popular in cooking and remedies."
  },
  {
    _id: "hibiscus",
    name: "Hibiscus",
    region: "Tropics & Subtropics",
    type: "Flower",
    commonNames: "Rose Mallow, China Rose, Shoe Flower",
    habitat: "Gardens, tropical and subtropical regions",
    botanicalName: "Hibiscus rosa-sinensis",
    imageSrc: "/images/hibiscus.png",
    audioFile: "/audio/hibiscus.mp3",
    youtubeUrl: "https://www.youtube.com/embed/kSxRXhcm1Hw",
    sketchfabModelUrl: "https://sketchfab.com/models/8992b6b94b094a069930104a32d5e9f5/embed?ui_hint=2",
    multimedia: [
      "/images/hibiscus2.png",
      "/images/hibiscus3.png",
      "/images/hibiscus4.png"
    ],
    medicinalUses: "Used for treating high blood pressure, fever, and as a diuretic. Hibiscus tea is popular for its health benefits.",
    methodsOfCultivation: "Grows best in well-drained soil with plenty of sunlight. Requires regular watering.",
    ExtractionProcess: "Flowers are dried and used for making tea or extracts.",
    scientificResearchAndStudies: "Studies show hibiscus may help lower blood pressure and cholesterol.",
    sideEffectsAndRisks: "Generally safe, but excessive consumption may cause liver issues.",
    environmentalImpact: "Attracts pollinators and supports garden biodiversity.",
    nutritionalBenefits: "Rich in vitamin C and antioxidants.",
    Products: "Hibiscus tea, hair oil, skincare products.",
    TraditionalMedicine: "Used in Ayurveda and traditional Chinese medicine.",
    otherInfo: "Hibiscus is also used as a natural dye and in culinary dishes."
  },
  {
    _id: "lavender",
    name: "Lavender",
    region: "Mediterranean",
    type: "Flowering Herb",
    commonNames: "Lavandula, English Lavender",
    habitat: "Sunny, well-drained fields",
    botanicalName: "Lavandula angustifolia",
    imageSrc: "/images/lavender.png",
    audioFile: "/audio/lavender.mp3",
    youtubeUrl: "https://www.youtube.com/embed/aaKJm9jad6Q",
    sketchfabModelUrl: "https://sketchfab.com/models/08f35ae30b924678955b4bb483b86a70/embed?autospin=1&autostart=1",
    multimedia: [
      "/images/lavender2.png",
      "/images/lavender3.png",
      "/images/lavender4.png"
    ],
    medicinalUses: "Reduces anxiety, improves sleep, soothes skin.",
    methodsOfCultivation: "Prefers full sun, well-drained soil.",
    ExtractionProcess: "Flowers are steam-distilled for oil.",
    scientificResearchAndStudies: "Lavender oil shown to reduce anxiety and insomnia.",
    sideEffectsAndRisks: "Oil may cause skin irritation in some people.",
    environmentalImpact: "Attracts bees, supports pollinators.",
    nutritionalBenefits: "Used in teas and desserts for flavor.",
    Products: "Lavender oil, sachets, tea.",
    TraditionalMedicine: "Used in European folk medicine.",
    otherInfo: "Popular in aromatherapy and cosmetics."
  },
  {
    _id: "neem",
    name: "Neem",
    region: "India",
    type: "Tree",
    commonNames: "Indian Lilac, Margosa",
    habitat: "Tropical, semi-tropical regions",
    botanicalName: "Azadirachta indica",
    imageSrc: "/images/neem.png",
    audioFile: "/audio/neem.mp3",
    youtubeUrl: "https://www.youtube.com/embed/8Oxw4BgqQ2Y",
    sketchfabModelUrl: "https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed?ui_hint=2",
    multimedia: [
      "/images/neem2.png",
      "/images/neem3.png",
      "/images/neem4.png"
    ],
    medicinalUses: "Antibacterial, supports oral and skin health.",
    methodsOfCultivation: "Grows in poor soils, drought-tolerant.",
    ExtractionProcess: "Leaves, seeds, and bark are processed for oil and extracts.",
    scientificResearchAndStudies: "Neem oil shown to have antimicrobial properties.",
    sideEffectsAndRisks: "Neem oil is toxic if ingested in large amounts.",
    environmentalImpact: "Used as a natural pesticide.",
    nutritionalBenefits: "Bitter, not commonly consumed as food.",
    Products: "Neem oil, toothpaste, soaps.",
    TraditionalMedicine: "Used in Ayurveda for skin and dental care.",
    otherInfo: "Widely used in organic farming."
  },
  {
    _id: "rosemary",
    name: "Rosemary",
    region: "Mediterranean",
    type: "Herb",
    commonNames: "Rosmarinus, Anthos",
    habitat: "Sunny, well-drained gardens",
    botanicalName: "Salvia rosmarinus",
    imageSrc: "/images/rosemary.png",
    audioFile: "/audio/rosemary.mp3",
    youtubeUrl: "https://www.youtube.com/embed/GrnrDsGao20",
    sketchfabModelUrl: "https://sketchfab.com/models/d5c0f249ff8a4d13840abf681bb92d29/embed?ui_hint=2",
    multimedia: [
      "/images/rosemary2.png",
      "/images/rosemary3.png",
      "/images/rosemary4.png"
    ],
    medicinalUses: "Improves memory, relieves pain, supports digestion.",
    methodsOfCultivation: "Requires full sun, well-drained soil.",
    ExtractionProcess: "Leaves are dried or steam-distilled for oil.",
    scientificResearchAndStudies: "Research supports cognitive benefits.",
    sideEffectsAndRisks: "Generally safe, but oil may cause allergic reactions.",
    environmentalImpact: "Attracts pollinators, drought-tolerant.",
    nutritionalBenefits: "Rich in antioxidants, used as a spice.",
    Products: "Rosemary oil, dried herb, tea.",
    TraditionalMedicine: "Used in Mediterranean folk medicine.",
    otherInfo: "Symbol of remembrance."
  },
  {
    _id: "sage",
    name: "Sage",
    region: "Mediterranean",
    type: "Herb",
    commonNames: "Salvia, Garden Sage",
    habitat: "Sunny, rocky soils",
    botanicalName: "Salvia officinalis",
    imageSrc: "/images/sage.png",
    audioFile: "/audio/sage.mp3",
    youtubeUrl: "https://www.youtube.com/embed/2QdY1QkQeX4",
    sketchfabModelUrl: "https://sketchfab.com/models/f41f028de9ca4be2b2e85df0820508ae/embed?ui_hint=2",
    multimedia: [
      "/images/sage2.png",
      "/images/sage3.png",
      "/images/sage4.png"
    ],
    medicinalUses: "Improves digestion, relieves sore throat, boosts memory.",
    methodsOfCultivation: "Prefers full sun, well-drained soil.",
    ExtractionProcess: "Leaves are dried or used fresh.",
    scientificResearchAndStudies: "Shown to improve cognitive function.",
    sideEffectsAndRisks: "Excessive use may cause nervousness.",
    environmentalImpact: "Attracts bees, drought-tolerant.",
    nutritionalBenefits: "Used as a spice, rich in vitamin K.",
    Products: "Sage oil, dried leaves, tea.",
    TraditionalMedicine: "Used in European and Native American medicine.",
    otherInfo: "Used in smudging rituals."
  }
];

function UploadPlantsData() {
  const uploadData = async () => {
    try {
      for (const plant of plantData) {
        const docRef = doc(firestore, "plants", plant._id);
        await setDoc(docRef, plant);
        console.log(`✅ Uploaded: ${plant.name}`);
      }
      alert("🌿 All 12 plant data uploaded successfully!");
    } catch (error) {
      console.error("❌ Error uploading data:", error);
      alert("❌ Upload failed. Check console.");
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Upload Plant Data</h2>
      <button
        onClick={uploadData}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg"
      >
        Upload Plant Data to Firestore
      </button>
    </div>
  );
}

export default UploadPlantsData;
