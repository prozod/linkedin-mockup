import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCCAl1dnhmv1pf7CWQ4Cy9RjLMWVFM7Bw",
  authDomain: "linkedin-clone-7cdfa.firebaseapp.com",
  projectId: "linkedin-clone-7cdfa",
  storageBucket: "linkedin-clone-7cdfa.appspot.com",
  messagingSenderId: "730322202817",
  appId: "1:730322202817:web:cbc462aa8a961630212440",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
