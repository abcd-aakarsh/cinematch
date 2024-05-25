// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB48gU92DrlposIlvxL04I0jUFYhDNrGYU",
  authDomain: "movieflix-94807.firebaseapp.com",
  projectId: "movieflix-94807",
  storageBucket: "movieflix-94807.appspot.com",
  messagingSenderId: "187118075008",
  appId: "1:187118075008:web:446579c223fb4006fa3a65",
  measurementId: "G-PXR2F7GFVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
