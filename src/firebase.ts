import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgKxIo0KH6dRP-kjyf8ACRUD1zMmGEfHI",
  authDomain: "cashcraft-c8a02.firebaseapp.com",
  projectId: "cashcraft-c8a02",
  storageBucket: "cashcraft-c8a02.appspot.com",
  messagingSenderId: "930540132801",
  appId: "1:930540132801:web:efcee41515579995ad7740",
  measurementId: "G-Z6DCCGGQC4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
