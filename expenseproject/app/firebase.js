// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhe25GjGDoFVH55_oIy5ATw1XQnFXV27g",
  authDomain: "expense-tracker-8b9e4.firebaseapp.com",
  projectId: "expense-tracker-8b9e4",
  storageBucket: "expense-tracker-8b9e4.appspot.com",
  messagingSenderId: "343973182312",
  appId: "1:343973182312:web:297b01f7bde0e2da8c74dd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);