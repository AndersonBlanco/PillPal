
import {initializeApp, initializeServerApp} from "firebase/app";
import {useState} from "react"; 
import {OAuthProvider,  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

//credentials: 
const firebaseConfig = {
    apiKey: "AIzaSyA9-3ufPVXdBdtfi5a0Ouslk0vUHkc-kKg",
    authDomain: "pillpal-efabf.firebaseapp.com",
    projectId: "pillpal-efabf",
    storageBucket: "pillpal-efabf.firebasestorage.app",
    messagingSenderId: "95853733135",
    appId: "1:95853733135:web:aa4a187156028fb34d4a7a",
    measurementId: "G-6HB5C7WKED"
  };

const app = initializeApp(firebaseConfig); 

const auth = getAuth(app); 
const aple_provider = new OAuthProvider('apple.com');
//auth.languageCode = "it"; 

aple_provider.addScope("email");
aple_provider.addScope("password");
//aple_provider.setDefaultLanguage("it"); 


module.exports =  {app, auth, aple_provider}; 
