import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import 'tachyons';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import { FirestoreProvider } from 'react-firestore';
import { firebase } from './firebase';

ReactDOM.render(
    <Router>
    <FirestoreProvider firebase={firebase}>
      <App />
    </FirestoreProvider>
    </Router>,
  document.getElementById('root')
);

