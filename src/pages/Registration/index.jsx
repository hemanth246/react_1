import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Controlled vs Uncontrolled component
// Ref - Reactjs.org

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
    };

    this.passwordNode = React.createRef();
    this.confirmPasswordNode = React.createRef();
  }

  onChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = {};

    for (let field of e.currentTarget) {
      if (field.type !== "submit") {
        formData[field.name] = field.value;
      }
    }

    console.log("onSubmit =----> ", formData);
  };

  onBlur = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { passwordNode, confirmPasswordNode } = this;

    if (passwordNode.value !== confirmPasswordNode.value) {
      alert("Password and Confirm password should match");
    }
  };

  render() {
    return (
      <div className="registration-page d-flex my-auto align-content-center flex-wrap">
        <div>
          <form className="user-form" onSubmit={this.onSubmit}>
            <h2 className="text-center">
              <u>Create Account</u>
            </h2>
            <p className="lead text-center">
              It's free and hardly takes more than 30 seconds.
            </p>

            <div className="form-group">
              <div className="row border-bottom">
                <span className="col-1 pt-2 input-group-addon">
                  <FontAwesomeIcon icon="user" />
                </span>
                <input
                  type="text"
                  className="col-10 form-control border-0 shadow-none"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  maxLength="40"
                  minLength="10"
                  required="required"
                  title="required"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="row border-bottom">
                <span className="col-1 pt-2 input-group-addon">
                  <FontAwesomeIcon icon="paper-plane" />
                </span>
                <input
                  type="email"
                  className="col-10 form-control border-0 shadow-none"
                  placeholder="Email Address"
                  required="required"
                  name="email"
                  maxLength="40"
                  minLength="10"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="row border-bottom">
                <span className="col-1 pt-2 input-group-addon">
                  <FontAwesomeIcon icon="lock" />
                </span>
                <input
                  ref={(node) => {
                    this.passwordNode = node;
                  }}
                  type="password"
                  id="password"
                  className="col-10 form-control border-0 shadow-none"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="row border-bottom">
                <span className="col-1 pt-2 input-group-addon">
                  <FontAwesomeIcon icon="lock" />
                  <FontAwesomeIcon icon="check" className="confirm-pass-icon" />
                </span>
                <input
                  ref={(node) => {
                    this.confirmPasswordNode = node;
                  }}
                  type="password"
                  className="col-10 form-control border-0 shadow-none"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required="required"
                  onBlur={this.onBlur}
                />
              </div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Sign Up
              </button>
            </div>

            <p className="small text-center">
              By clicking the Sign Up button, you agree to our <br />
              <a href="/tnc">Terms &amp; Conditions</a>, and{" "}
              <a href="/servicePolicies">Privacy Policy</a>.
            </p>
          </form>

          <div className="text-center">
            Already have an account? <a href="/login">Login here</a>.
          </div>
        </div>
      </div>
    );
  }
}
