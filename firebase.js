import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCU07I8xJkyuyfRSTO-VP9OSH10X9qRJeA",
    authDomain: "todoapp-ad7bb.firebaseapp.com",
    projectId: "todoapp-ad7bb",
    storageBucket: "todoapp-ad7bb.appspot.com",
    messagingSenderId: "804215005601",
    appId: "1:804215005601:web:e0ad57621b5ba36e93ebe0",
    measurementId: "G-M8VZ9BKWTW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}