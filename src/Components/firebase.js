// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb1fBbBV55p5oBNPBwmcjcEZaxXGMdHiM",
  authDomain: "app-music-726d1.firebaseapp.com",
  projectId: "app-music-726d1",
  storageBucket: "app-music-726d1.appspot.com",
  messagingSenderId: "136949790935",
  appId: "1:136949790935:web:ddb80642870cfe6d82d892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };