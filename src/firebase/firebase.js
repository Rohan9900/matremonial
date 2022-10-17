// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9l7PhE5kGiAjc9xfoIjMyZbzLR0ZUqoQ",
  authDomain: "location-424c4.firebaseapp.com",
  projectId: "location-424c4",
  storageBucket: "location-424c4.appspot.com",
  messagingSenderId: "267275878471",
  appId: "1:267275878471:web:dedd8c05e0478cb1727162"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore=firebase.firestore();
   


export default firestore;