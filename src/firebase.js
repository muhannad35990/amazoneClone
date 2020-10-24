import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDqsOp30krxCsYWhVHum0EwaHrwknuLnqI",
  authDomain: "clone-c488e.firebaseapp.com",
  databaseURL: "https://clone-c488e.firebaseio.com",
  projectId: "clone-c488e",
  storageBucket: "clone-c488e.appspot.com",
  messagingSenderId: "218909356646",
  appId: "1:218909356646:web:9b9e2d1487574e790fb3a7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
