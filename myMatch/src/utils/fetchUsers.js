import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5QSgXL27GNGyxujkGzwJ_XEx8Iu8t-1s",
  authDomain: "mymatch-dev-a2731.firebaseapp.com",
  projectId: "mymatch-dev-a2731",
  storageBucket: "mymatch-dev-a2731.appspot.com",
  messagingSenderId: "457436251230",
  appId: "1:457436251230:web:790df2cce0cf",
  measurementId: "G-TWHCV72TCN",
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

// Initializing Firestore
const db = getFirestore(app);

export const fetchUsers = async () => {
  try {
    const usersSnapshot = await getDocs(collection(db, "users"));
    console.log(usersSnapshot)
  const users = usersSnapshot.docs.map((doc) => doc.data());
  return users;
  } catch (error) {
    console.log(error)
  }
  
};
