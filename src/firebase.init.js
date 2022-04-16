// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9W-6g3pOqZdQfxl70hvftiCvErafDcHc",
  authDomain: "basic-programmer.firebaseapp.com",
  projectId: "basic-programmer",
  storageBucket: "basic-programmer.appspot.com",
  messagingSenderId: "762790769460",
  appId: "1:762790769460:web:c1b60fb6d5b4c9228b6b61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
