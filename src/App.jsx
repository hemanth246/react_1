import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ServicePolicies from "./pages/ServicePolicies";
import NotFound from "./pages/NotFound";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import Header, { SeesionHeader } from "./components/Header";
import Footer, { SeesionFooter } from "./components/Footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const SessionLayout = ({ children }) => (
  <div className="d-flex flex-column h-100 pl-2">
    <SeesionHeader />
    {children}
    <SeesionFooter />
  </div>
);

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={["/login", "/register", "/forgotPassword"]}>
          <SessionLayout>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Registration />
              </Route>
              <Route path="/forgotPassword">
                <ForgotPassword />
              </Route>
            </Switch>
          </SessionLayout>
        </Route>
        <Route path={["/aboutUs", "/contactUs", "/servicePolicies", "/"]}>
          <MainLayout>
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
            </Switch>
          </MainLayout>
        </Route>

        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}
