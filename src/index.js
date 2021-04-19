import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDJluSppm9fNzdZNyB8xSmUCpdXTko6w4E",
  authDomain: "task-desk-25de5.firebaseapp.com",
  databaseURL: "https://task-desk-25de5-default-rtdb.firebaseio.com",
  projectId: "task-desk-25de5",
  storageBucket: "task-desk-25de5.appspot.com",
  messagingSenderId: "215335118120",
  appId: "1:215335118120:web:17bf6bf6dd719881075c1d",
  measurementId: "G-4GZKH6S16V"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
bridge.send("VKWebAppInit");
const db = firebase.firestore();
db.collection("desks").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});

ReactDOM.render(<App />, document.getElementById("root"));

