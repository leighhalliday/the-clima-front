import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Most styling will be done using styled-components but here we'll
// define some global reset and base styles using straight up CSS
import "./styles/reset.css";
import "./styles/base.css";

// Render our <App /> component into the #root div element
ReactDOM.render(<App />, document.getElementById("root"));

// Start a service worker... helps with caching and offline ability
registerServiceWorker();
