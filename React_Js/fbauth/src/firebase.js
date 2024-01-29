// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5GRZUZmDQLvb5EVkVM033WDLIZ0EktXs",
  authDomain: "fbauth-29daf.firebaseapp.com",
  projectId: "fbauth-29daf",
  storageBucket: "fbauth-29daf.appspot.com",
  messagingSenderId: "453916021871",
  appId: "1:453916021871:web:e8f9c7a76f40ee0132299a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;

// const app = initializeApp(firebaseConfig);
