// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu_M_DdGDvi1a_4jJiZ5ecwafks3A6u5E",
  authDomain: "react-ecommerce-489d9.firebaseapp.com",
  projectId: "react-ecommerce-489d9",
  storageBucket: "react-ecommerce-489d9.appspot.com",
  messagingSenderId: "63615351709",
  appId: "1:63615351709:web:a274935edcdbc412400d74",
  measurementId: "G-9X2JGDYY1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db