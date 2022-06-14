// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdDLtRzFoizFnNK-vK0WXzeN9-9DJazRY",
  authDomain: "aptcoder-admin.firebaseapp.com",
  projectId: "aptcoder-admin",
  storageBucket: "aptcoder-admin.appspot.com",
  messagingSenderId: "488078877466",
  appId: "1:488078877466:web:94e5504018eaf2a69e82a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
