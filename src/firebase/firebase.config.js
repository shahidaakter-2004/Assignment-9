// src/firebase/firebase.config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcKtvUnCs5iV8PQnhSmYkvyYeiPKE2ZCI",
  authDomain: "greennest-f9ec0.firebaseapp.com",
  projectId: "greennest-f9ec0",
  storageBucket: "greennest-f9ec0.firebasestorage.app",
  messagingSenderId: "179187871778",
  appId: "1:179187871778:web:a412659a3db0897f19da7b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
