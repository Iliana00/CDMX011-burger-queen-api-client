import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAcjIcBDvsXhJ072X1CdjMRkcFpsoYIQLE",
  authDomain: "burgerq-b7355.firebaseapp.com",
  projectId: "burgerq-b7355",
  storageBucket: "burgerq-b7355.appspot.com",
  messagingSenderId: "604555062911",
  appId: "1:604555062911:web:533b32d81dac5f046f194a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const db = getFirestore(app);

