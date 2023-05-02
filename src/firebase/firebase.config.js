// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxH2RTTuH4MzZmzprDPAI34BXqrHxlJs4",
    authDomain: "furniture-zoon.firebaseapp.com",
    projectId: "furniture-zoon",
    storageBucket: "furniture-zoon.appspot.com",
    messagingSenderId: "419266657833",
    appId: "1:419266657833:web:f5356305eeaf604c286638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;