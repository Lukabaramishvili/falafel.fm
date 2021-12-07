import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import "./css/suggest.css";
import "tachyons";
import App from "./components/App";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.initialize("UA-181645767-1");
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
