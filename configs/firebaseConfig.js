// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "digital-e-commerce-fbfde.firebaseapp.com",
  projectId: "digital-e-commerce-fbfde",
  storageBucket: "digital-e-commerce-fbfde.firebasestorage.app",
  messagingSenderId: "657005205035",
  appId: "1:657005205035:web:f264edf0c6ef000d78fc6e",
  measurementId: "G-BF5H1GJW5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app);