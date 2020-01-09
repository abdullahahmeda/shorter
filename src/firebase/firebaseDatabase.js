import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDi7AGf2fj5lzgYGqtTnoHpXEFTOx89f9w",
  authDomain: "url-shortener-83768.firebaseapp.com",
  databaseURL: "https://url-shortener-83768.firebaseio.com",
  projectId: "url-shortener-83768",
  storageBucket: "url-shortener-83768.appspot.com",
  messagingSenderId: "647125552921",
  appId: "1:647125552921:web:70e0c0f23d730f9f50ff88"
};

firebase.initializeApp(config);

const db = firebase.database();

export default db;
