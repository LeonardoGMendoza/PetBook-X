// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKEIQGwnwdhT5_jNPeB_ITlfo9eq4-3dQ",
  authDomain: "petbook-x.firebaseapp.com",
  projectId: "petbook-x",
  storageBucket: "petbook-x.appspot.com",
  messagingSenderId: "240933365495",
  appId: "1:240933365495:web:0223d169f32823b14255f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

// Export the services for use in other files
export { app, auth, database, storage };
