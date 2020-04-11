import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyCCc93Kxibfw96tntLSxJFhFv7r5jZoYLs",
  authDomain: "react-slack-clone-96fda.firebaseapp.com",
  databaseURL: "https://react-slack-clone-96fda.firebaseio.com",
  projectId: "react-slack-clone-96fda",
  storageBucket: "react-slack-clone-96fda.appspot.com",
  messagingSenderId: "618944198042",
  appId: "1:618944198042:web:f241135fd422b9ed52b623",
  measurementId: "G-8R83TD572J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;