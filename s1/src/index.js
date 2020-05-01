import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./styles.scss";

const mountTo = document.getElementById("app-root");

ReactDOM.render(<App />, mountTo);
