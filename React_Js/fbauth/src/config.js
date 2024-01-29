// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDxWvmb_1_wAVGZh8ptQtA-GxIJIc5uhvg",
  authDomain: "crudproject-5393b.firebaseapp.com",
  projectId: "crudproject-5393b",
  storageBucket: "crudproject-5393b.appspot.com",
  messagingSenderId: "640304302521",
  appId: "1:640304302521:web:763fd396fe8b91c232ce68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
