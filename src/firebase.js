import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9CDmMWOAz8yxNl3yEQQ_p7CEG6wrzvuM",
  authDomain: "linkedin-clone-6cdba.firebaseapp.com",
  projectId: "linkedin-clone-6cdba",
  storageBucket: "linkedin-clone-6cdba.appspot.com",
  messagingSenderId: "187774302309",
  appId: "1:187774302309:web:003ace26eb8b512b6dee8c",
  measurementId: "G-MV2RDVPHRT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

console.log(auth, provider, storage, db);

export { auth, provider, storage };

export default db;
