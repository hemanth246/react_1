import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="jumbotron text-center">BODY</div>
        <Footer />
      </Fragment>
    );
  }
}
