// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB924SdLOzngqLmh-MlBySVV6FZuCNgP3U",
  authDomain: "react-9680a.firebaseapp.com",
  projectId: "react-9680a",
  storageBucket: "react-9680a.appspot.com",
  messagingSenderId: "531182990001",
  appId: "1:531182990001:web:1dd14d827427bc87192890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirestoreApp = ( ) => {
    return app
}
