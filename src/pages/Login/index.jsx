import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    return (
      <div className="login-page">
        <form className="user-form align-middle" onSubmit={this.onSubmit}>
          <h2 className="text-center">
            <u>Login to Account</u>
          </h2>
          <div className="form-group">
            <div className="row border-bottom">
              <span className="col-1 pt-2 input-group-addon">
                <FontAwesomeIcon icon="user" />
              </span>
              <input
                type="text"
                className="col-10 form-control border-0 shadow-none"
                name="username"
                placeholder="Username"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="row border-bottom">
              <span className="col-1 pt-2 input-group-addon">
                <FontAwesomeIcon icon="lock" />
              </span>
              <input
                type="password"
                className="col-10 form-control border-0 shadow-none"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Log In
            </button>
          </div>
          <p className="small text-center">
            By clicking the Sign Up button, you agree to our <br />
            <a href="/tnc">Terms &amp; Conditions</a>, and{" "}
            <a href="/servicePolicies">Privacy Policy</a>.
          </p>
        </form>
        <div className="text-center">
          Don't have an account? <a href="/register">Register here</a>.
        </div>
        <div className="text-center">
          Forgot your password? <a href="/forgotPassword">Recover here</a>.
        </div>
      </div>
    );
  }
}
