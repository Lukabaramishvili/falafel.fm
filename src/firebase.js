import firebase from 'firebase';

const fb = firebase.initializeApp({
  apiKey: "AIzaSyBvQbtLYNhP5sbiNoebpbClyCHLmtE2hro",
  authDomain: "falafel-fm.firebaseapp.com",
  databaseURL: "https://falafel-fm.firebaseio.com",
  projectId: "falafel-fm",
  storageBucket: "falafel-fm.appspot.com",
  messagingSenderId: "898247582533",
  appId: "1:898247582533:web:c1953589e7d5ed7f59d42c",
  measurementId: "G-NZY4MF8JF0"
});

let db = fb.firestore();

export { fb };
export { db, firebase };