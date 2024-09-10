// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHZxhg21lf854dwsrkBqnTDmKOo1H_mtI",
  authDomain: "app-auth-hcs.firebaseapp.com",
  projectId: "app-auth-hcs",
  storageBucket: "app-auth-hcs.appspot.com",
  messagingSenderId: "879595884860",
  appId: "1:879595884860:web:18d7857466250cfc734e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);