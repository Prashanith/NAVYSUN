import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDL-wRna89IX6k2SGf6zx2PwYN1PDJaTls",
    authDomain: "navysunpharma-d92dd.firebaseapp.com",
    projectId: "navysunpharma-d92dd",
    storageBucket: "navysunpharma-d92dd.appspot.com",
    messagingSenderId: "63958081976",
    appId: "1:63958081976:web:8368af4be9ca6810602f4d",
    measurementId: "G-H71XBY82Q1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;