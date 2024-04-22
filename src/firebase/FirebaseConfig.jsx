// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBtKBbcJozMSHNy6Uhp9XVu8tA9q0eMmk",
  authDomain: "ecommerce-760fb.firebaseapp.com",
  projectId: "ecommerce-760fb",
  storageBucket: "ecommerce-760fb.appspot.com",
  messagingSenderId: "139300487216",
  appId: "1:139300487216:web:2ad24a6d91fe88d592edf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };