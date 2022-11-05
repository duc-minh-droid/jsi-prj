import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkXNNkop99F9LIlWR70PwV4_aRT5HnnZs",
  authDomain: "jsi-last.firebaseapp.com",
  projectId: "jsi-last",
  storageBucket: "jsi-last.appspot.com",
  messagingSenderId: "799901958301",
  appId: "1:799901958301:web:9eb961e21080cea2419474",
  measurementId: "G-EGNFKKN0TF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app);

export const lettersDB = collection(db, "letters");
export const templatesDB = collection(db, "templates");