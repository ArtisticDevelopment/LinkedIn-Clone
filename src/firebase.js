// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9CDmMWOAz8yxNl3yEQQ_p7CEG6wrzvuM",
//   authDomain: "linkedin-clone-6cdba.firebaseapp.com",
//   projectId: "linkedin-clone-6cdba",
//   storageBucket: "linkedin-clone-6cdba.appspot.com",
//   messagingSenderId: "187774302309",
//   appId: "1:187774302309:web:003ace26eb8b512b6dee8c",
//   measurementId: "G-MV2RDVPHRT",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// console.log(auth, provider, storage, db);

// export { auth, provider, storage };

// export default db;
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA9CDmMWOAz8yxNl3yEQQ_p7CEG6wrzvuM",
  authDomain: "linkedin-clone-6cdba.firebaseapp.com",
  projectId: "linkedin-clone-6cdba",
  storageBucket: "linkedin-clone-6cdba.appspot.com",
  messagingSenderId: "187774302309",
  appId: "1:187774302309:web:003ace26eb8b512b6dee8c",
  measurementId: "G-MV2RDVPHRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;

    console.log({ credential, token, user });
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export { auth, provider, storage };

export default db;
