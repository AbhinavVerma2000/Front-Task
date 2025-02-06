// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPDiw8ofDE7dP5Zn_5p_ibd5gg3L3XWpY",
  authDomain: "madrocket-7b83c.firebaseapp.com",
  projectId: "madrocket-7b83c",
  storageBucket: "madrocket-7b83c.firebasestorage.app",
  messagingSenderId: "443860240138",
  appId: "1:443860240138:web:768727edbe46cce3a2dcf3",
  measurementId: "G-6W333F4HVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);