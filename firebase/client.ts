// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1sKohRF5CxO0AODwWZM8HZtYQgDLPtz4",
  authDomain: "mjuprepwise.firebaseapp.com",
  projectId: "mjuprepwise",
  storageBucket: "mjuprepwise.firebasestorage.app",
  messagingSenderId: "788280749829",
  appId: "1:788280749829:web:4cd35dcbcacba22cd9116c",
  measurementId: "G-BVB439FZEW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
