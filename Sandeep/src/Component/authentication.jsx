// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJgwP_Y5I21XatBUw71BTd3t1OCW3LWmM",
  authDomain: "bookry-715dc.firebaseapp.com",
  projectId: "bookry-715dc",
  storageBucket: "bookry-715dc.appspot.com",
  messagingSenderId: "206881869809",
  appId: "1:206881869809:web:0b79507d56b901f3257e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);