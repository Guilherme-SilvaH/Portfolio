import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCmWnO9aTSuVWw5f8zgCPBcRr88N2gWaQ4",
    authDomain: "form-portfolio-7da1a.firebaseapp.com",
    projectId: "form-portfolio-7da1a",
    storageBucket: "form-portfolio-7da1a.appspot.com",
    messagingSenderId: "125998737721",
    appId: "1:125998737721:web:fa3ebd33e529c90efbe0e8"
  };



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {db}