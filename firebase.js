// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW6Ro5YsTIcGjlAEUnAG3bTb_yh9UdJL4",
  authDomain: "ecommerce-e248d.firebaseapp.com",
  projectId: "ecommerce-e248d",
  storageBucket: "ecommerce-e248d.appspot.com",
  messagingSenderId: "854689795071",
  appId: "1:854689795071:web:e47719874c4c7f09dbb5ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);