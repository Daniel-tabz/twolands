// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNN_WALxcf8pW9AbGBNriWAeqjhy8j3Wg",
  authDomain: "ezze-wallet.firebaseapp.com",
  projectId: "ezze-wallet",
  storageBucket: "ezze-wallet.appspot.com",
  messagingSenderId: "72804167441",
  appId: "1:72804167441:web:8544d2f9ba48dff1cc26b0",
  measurementId: "G-G07M0MKB77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
