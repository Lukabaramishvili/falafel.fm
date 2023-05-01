import firebase from 'firebase/app';
import 'firebase/firestore';

const fb = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'falafel-fm.firebaseapp.com',
  databaseURL: 'https://falafel-fm.firebaseio.com',
  projectId: 'falafel-fm',
  storageBucket: 'falafel-fm.appspot.com',
  messagingSenderId: '898247582533',
  appId: '1:898247582533:web:7c81e24739a71f2459d42c',
  measurementId: '${config.measurementId}',
});

let db = fb.firestore();

export { fb, db, firebase };
