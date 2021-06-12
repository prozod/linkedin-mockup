import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  projectId: "linkedin-clone-7cdfa",
  appId: "1:730322202817:web:1b9e28abd3c8e08a212440",
  storageBucket: "linkedin-clone-7cdfa.appspot.com",
  locationId: "europe-west",
  apiKey: "AIzaSyDCCAl1dnhmv1pf7CWQ4Cy9RjLMWVFM7Bw",
  authDomain: "linkedin-clone-7cdfa.firebaseapp.com",
  messagingSenderId: "730322202817",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebase.auth();

export { db, auth, storage };
