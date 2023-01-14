// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9IlCU19W1iR1KKp0rGOEp_kXmL_plnCA",
  authDomain: "react-curso-b05e6.firebaseapp.com",
  projectId: "react-curso-b05e6",
  storageBucket: "react-curso-b05e6.appspot.com",
  messagingSenderId: "705577304994",
  appId: "1:705577304994:web:356298b19d846561f628fb",
  measurementId: "G-8LVQWZRNP1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
