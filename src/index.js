import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import App from "./App";

import "./styles.scss";

// Init SVG icon library
library.add(fas, fab);

const mountTo = document.getElementById("app-root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  mountTo
);
