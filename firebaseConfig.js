import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDtWPBZWzuNubuW_vHs2h0_VBBhvuHjzIo",
  authDomain: "main-2-fyp.firebaseapp.com",
  databaseURL: "https://main-2-fyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "main-2-fyp",
  storageBucket: "main-2-fyp.appspot.com",
  messagingSenderId: "425416063651",
  appId: "1:425416063651:web:2d5211aa23454c0c191d16",
  measurementId: "G-T94HLXTZVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
