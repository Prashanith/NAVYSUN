// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpm_uVGkp9hlKbIW1QtEEXAQOTCSmgttU",
  authDomain: "navysun-pharma.firebaseapp.com",
  projectId: "navysun-pharma",
  storageBucket: "navysun-pharma.appspot.com",
  messagingSenderId: "543804779425",
  appId: "1:543804779425:web:93779510f78aa9a68eb9e0",
  measurementId: "G-8B1G1D0CP7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
