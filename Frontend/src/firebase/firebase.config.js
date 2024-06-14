// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtSRukMucOV_3KSfuPhK-BSHHNpBjlzMo",
  authDomain: "mern-antique.firebaseapp.com",
  projectId: "mern-antique",
  storageBucket: "mern-antique.appspot.com",
  messagingSenderId: "1096536485716",
  appId: "1:1096536485716:web:8fa35059595d6c017a62c1",
  measurementId: "G-1D5K96XL08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;