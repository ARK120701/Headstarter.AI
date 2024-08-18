// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjv-8txOYwOH0ke_Od_0k_G8v6-bFXb60",
  authDomain: "inventory-managment-da3ce.firebaseapp.com",
  projectId: "inventory-managment-da3ce",
  storageBucket: "inventory-managment-da3ce.appspot.com",
  messagingSenderId: "713969875452",
  appId: "1:713969875452:web:7ffcaf915414bbd7e35a79",
  measurementId: "G-NRHJEMLPHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore= getFirestore(app)

export{firestore}
