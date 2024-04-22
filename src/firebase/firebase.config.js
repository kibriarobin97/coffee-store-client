// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJj2NUSQDHR1VB3rzoWeH1G2pBMXOXGnI",
  authDomain: "coffee-shop-98df2.firebaseapp.com",
  projectId: "coffee-shop-98df2",
  storageBucket: "coffee-shop-98df2.appspot.com",
  messagingSenderId: "354298169528",
  appId: "1:354298169528:web:0ec7307f97175f82ff4c4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;