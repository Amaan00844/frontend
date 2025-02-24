// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {  get, set } from 'firebase/database'
// import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
  } from "firebase/auth";
  
  import {
    getStorage,
  
    uploadBytes,
    getDownloadURL,
    deleteObject,
  } from "firebase/storage";
  
  import {
    onValue,
    getDatabase,
    ref ,
    push,
    set,
    get,
    serverTimestamp,
    remove,
    update,
  } from "firebase/database";
  import dotenv from "dotenv";
  dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHOR_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGINGSENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

export {
    auth,
    storage,
    database,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    
    push,
    set,
    get,
    onValue,
    remove,
    update,
    serverTimestamp,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
  };