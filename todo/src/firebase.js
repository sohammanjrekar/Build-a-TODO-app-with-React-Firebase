// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUvnLtdtK6GcRkYGfYGwFg5ZEfel9lO0s",
  authDomain: "soham-79a7b.firebaseapp.com",
  projectId: "soham-79a7b",
  storageBucket: "soham-79a7b.appspot.com",
  messagingSenderId: "945435640688",
  appId: "1:945435640688:web:ff94818dd2e6f053bac5b5",
  measurementId: "G-4ZW7G8CHGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();

export default { db };
