// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-35OJYi_8ceso2NiYVGPA72xjoy9LQvc",
  authDomain: "tecsol-d7813.firebaseapp.com",
  projectId: "tecsol-d7813",
  storageBucket: "tecsol-d7813.appspot.com",
  messagingSenderId: "132652653960",
  appId: "1:132652653960:web:4b72b3f8376bc46fd06e3d",
  measurementId: "G-K0YRDF5Q7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;