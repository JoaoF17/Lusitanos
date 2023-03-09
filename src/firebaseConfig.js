import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lusitanos-ac64b.firebaseapp.com",
  projectId: "lusitanos-ac64b",
  storageBucket: "lusitanos-ac64b.appspot.com",
  messagingSenderId: "135669664149",
  appId: "1:135669664149:web:8ed521fcdd47177fd2ce9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
