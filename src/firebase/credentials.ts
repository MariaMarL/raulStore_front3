// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3jFaY3pPzK2VSLWzQm_iLIPGF3BMHeU",
  authDomain: "raulstore-b0860.firebaseapp.com",
  projectId: "raulstore-b0860",
  storageBucket: "raulstore-b0860.appspot.com",
  messagingSenderId: "470412912390",
  appId: "1:470412912390:web:abd43f85a72bcb29f42087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)