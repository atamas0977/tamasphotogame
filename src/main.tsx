import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHtkReX3-zqRlyzUis_xjYNBblTDcfGWU",
  authDomain: "tamasphotogame.firebaseapp.com",
  projectId: "tamasphotogame",
  storageBucket: "tamasphotogame.firebasestorage.app",
  messagingSenderId: "272012238233",
  appId: "1:272012238233:web:b0d0a527740c1978e30708"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);