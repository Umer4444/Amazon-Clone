import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMDhgSAURI8d9HiD7s4YieJXa6GIaOjws",
    authDomain: "clone-66cf7.firebaseapp.com",
    projectId: "clone-66cf7",
    storageBucket: "clone-66cf7.appspot.com",
    messagingSenderId: "549647640185",
    appId: "1:549647640185:web:97c94b004aef91696216a8",
    measurementId: "G-RKBF9HCGK4"
});

const auth = firebase.auth();

export {auth};
