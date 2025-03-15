// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDq5LsiC5zUa0U6EXwOE00beEboSAhvGhc",
    authDomain: "job-search-project-f08bf.firebaseapp.com",
    projectId: "job-search-project-f08bf",
    storageBucket: "job-search-project-f08bf.firebasestorage.app",
    messagingSenderId: "206490066058",
    appId: "1:206490066058:web:4824e6232839cea1cf2173",
    measurementId: "G-KF08QTVJCS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);