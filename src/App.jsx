import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ServicePolicies from "./pages/ServicePolicies";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

// BrowserRouter, Route, Switch and Link --- react-router-dom

export default class App extends Component {
  render() {
    // ReactRouter way
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/servicePolicies">
            <ServicePolicies />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Fragment>
    );

    // const { pathname } = window.location;

    // React Router equivalent
    // if (pathname === "/") {
    //   return <Home />;
    // } else if (pathname === "/aboutUs") {
    //   return <AboutUs />;
    // } else if (pathname === "/contactUs") {
    //   return <ContactUs />;
    // } else if (pathname === "/servicePolicies") {
    //   return <ServicePolicies />;
    // } else {
    //   return <NotFound />;
    // }

    // Traditional way
    // return (
    //   <Fragment>
    //     <Header />
    //     <div className="jumbotrond">
    //       {pathname === "/" && <Home />}
    //       {pathname === "/aboutUs" && <AboutUs />}
    //       {pathname === "/contactUs" && <ContactUs />}
    //       {pathname === "/servicePolicies" && <ServicePolicies />}
    //       {pathname !== "/" && pathname !== "/servicePolicies" && <ServicePolicies />}
    //     </div>
    //     <Footer />
    //   </Fragment>
    // );
  }
}
