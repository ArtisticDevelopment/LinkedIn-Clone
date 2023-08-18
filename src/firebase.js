import firebase from "./firebase";

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

export { auth, provider, storage };

export default db;
