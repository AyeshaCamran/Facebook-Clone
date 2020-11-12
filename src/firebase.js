import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAfH6EDwMkJR85VsxqqwQHetvQGUMvoyY",
  authDomain: "facebook-clone-324ef.firebaseapp.com",
  databaseURL: "https://facebook-clone-324ef.firebaseio.com",
  projectId: "facebook-clone-324ef",
  storageBucket: "facebook-clone-324ef.appspot.com",
  messagingSenderId: "1054491024898",
  appId: "1:1054491024898:web:d605ec780ad69d17a1d11b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
