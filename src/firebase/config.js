import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyClH_aPymO1oSoL6ixbRt1U5D9zya6JiT8",
  authDomain: "chat-app-73710.firebaseapp.com",
  projectId: "chat-app-73710",
  storageBucket: "chat-app-73710.appspot.com",
  messagingSenderId: "246229825782",
  appId: "1:246229825782:web:53550ec289b80db35e14d7",
  measurementId: "G-Y0MLR0BWTG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
