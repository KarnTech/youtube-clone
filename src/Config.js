// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDdrzVHr9ihHX7bzCGqfbgOm261ObzjGBQ",
  authDomain: "youtu-2afae.firebaseapp.com",
  databaseURL: "https://youtu-2afae.firebaseio.com",
  projectId: "youtu-2afae",
  storageBucket: "youtu-2afae.appspot.com",
  messagingSenderId: "1031046133424",
  appId: "1:1031046133424:web:c2f278f4468bdd8c0dad75",
  measurementId: "G-9MGMLRD7S7"
};
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
