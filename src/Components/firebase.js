import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyArY26PhFoOgyB0rBX5hnl2unso4prQT2k",
  authDomain: "twitter-clone-3193b.firebaseapp.com",
  databaseURL: "https://twitter-clone-3193b.firebaseio.com",
  projectId: "twitter-clone-3193b",
  storageBucket: "twitter-clone-3193b.appspot.com",
  messagingSenderId: "438778622814",
  appId: "1:438778622814:web:5427e6e48b4293e343d5cf",
  measurementId: "G-97TQ8PP0QX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
