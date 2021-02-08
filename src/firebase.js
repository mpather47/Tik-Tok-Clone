import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmeJD-4D4oA2GGyzKphNyna8Gu0h8xHMU",
    authDomain: "tik-tok-clone-33108.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-33108.firebaseio.com",
    projectId: "tik-tok-clone-33108",
    storageBucket: "tik-tok-clone-33108.appspot.com",
    messagingSenderId: "537471081581",
    appId: "1:537471081581:web:44a1bd8a0a786a3af8b364",
    measurementId: "G-06HTYB9WT1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;