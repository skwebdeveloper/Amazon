import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBLIseQOILJLMlGY66JVxOKs4ptIVhadGM",
    authDomain: "fir-aa6b6.firebaseapp.com",
    databaseURL: "https://fir-aa6b6.firebaseio.com",
    projectId: "fir-aa6b6",
    storageBucket: "fir-aa6b6.appspot.com",
    messagingSenderId: "164811672381",
    appId: "1:164811672381:web:a4a9bf9f8aaad5ec80d354"
  };
  // Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const  db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };