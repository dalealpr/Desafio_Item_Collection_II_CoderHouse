// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRFMaV8WPn6o_j2gFwVCwepbITp1YV0Qk",
  authDomain: "daleal-instruments.firebaseapp.com",
  projectId: "daleal-instruments",
  storageBucket: "daleal-instruments.appspot.com",
  messagingSenderId: "330477394482",
  appId: "1:330477394482:web:d1311f1c4ec0b6011cfa2b",
  measurementId: "G-6JLBKMRVQS"
};

// Initialize Firebase
initializeApp(firebaseConfig);
