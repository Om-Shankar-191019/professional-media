// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNLxrh1Bma-t-6EJjKpuLyJXFriKqIDwo",
  authDomain: "social-media-f7975.firebaseapp.com",
  projectId: "social-media-f7975",
  storageBucket: "social-media-f7975.appspot.com",
  messagingSenderId: "934307451428",
  appId: "1:934307451428:web:8cf3456e58c40dede17eb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
