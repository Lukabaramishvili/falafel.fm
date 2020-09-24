import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import 'tachyons';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
