import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "todolist-v2.firebaseapp.com",
    databaseURL: "https://todolist-v2.firebaseio.com",
    projectId: "todolist-v2",
    storageBucket: "todolist-v2.appspot.com",
    messagingSenderId: "945602407240",
    appId: "1:945602407240:web:1e9020ded4461f1b3a617d",
    measurementId: "G-9LN49ZGCLF"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;