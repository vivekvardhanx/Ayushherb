// frontend/src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase config for AyushHerb (VivekHerb project)
const firebaseConfig = {
  apiKey: "AIzaSyDfmJeZVSP6t-JQgt4cO8Gzaywrk9xH0-M",
  authDomain: "vivekherb-ed079.firebaseapp.com",
  projectId: "vivekherb-ed079",
  storageBucket: "vivekherb-ed079.appspot.com",
  messagingSenderId: "351240881769",
  appId: "1:351240881769:web:6034f6eb4049843b6e04f8",
  measurementId: "G-MCPS1TM8FG"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and Auth
const firestore = getFirestore(app);
const auth = getAuth(app);

// ✅ Export Firebase services
export { firestore, auth };

// ✅ Dummy visit counter functions (to stop crash errors)
export const getVisitCount = async () => {
  // You can later connect this to Firestore if needed
  return 42;
};

export const incrementVisitCount = async () => {
  console.log("Visit count incremented (dummy)");
};
