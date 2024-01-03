// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "equiestate-89eec.firebaseapp.com",
  projectId: "equiestate-89eec",
  storageBucket: "equiestate-89eec.appspot.com",
  messagingSenderId: "517057885152",
  appId: "1:517057885152:web:052a9fba3d2f57255ef185"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);