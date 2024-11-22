// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5v6XzKHaCLEz1Ld6AQayDaj0TzDGO1E8",
  authDomain: "whatsapp2024-f173b.firebaseapp.com",
  databaseURL: "https://whatsapp2024-f173b-default-rtdb.firebaseio.com",
  projectId: "whatsapp2024-f173b",
  storageBucket: "whatsapp2024-f173b.firebasestorage.app",
  messagingSenderId: "1000259050652",
  appId: "1:1000259050652:web:e10832b3ad1e7b99eb6159",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;
