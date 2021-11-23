
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYXE897whI1VLLi7fkv30xOmEpOy-0G-g",
  authDomain: "kwitter-51ce7.firebaseapp.com",
  databaseURL: "https://kwitter-51ce7-default-rtdb.firebaseio.com",
  projectId: "kwitter-51ce7",
  storageBucket: "kwitter-51ce7.appspot.com",
  messagingSenderId: "421041234352",
  appId: "1:421041234352:web:bbb16109d3be3cc5f87675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
