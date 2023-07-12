// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt6O_qryDYcnY6c-gc7l61WdlXrmSse_k",
  authDomain: "arjitport.firebaseapp.com",
  projectId: "arjitport",
  storageBucket: "arjitport.appspot.com",
  messagingSenderId: "47491441286",
  appId: "1:47491441286:web:1b5cb6cb396264883fa707"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore();