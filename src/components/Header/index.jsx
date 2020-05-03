import React, { Component } from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SITE_NAME, SITE_LOGO, NAV_MENU_ITEMS } from "../../config";

// Task:
// 1. Show an alert with the user search query from search box on
// click of search icon of enter - Done

// - Listener - click event and enter event-- - callback

// - Show alert('Message')

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      query: "",
    };
  }

  toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  };

  onChange = (e) => {
    e.stopPropagation();

    this.setState({ query: e.currentTarget.value });
  };

  onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    alert(this.state.query);
  };

  render() {
    const { showMenu } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand font-pacifico" href="#">
          <FontAwesomeIcon icon={SITE_LOGO} size="2x" color="green" />
          {SITE_NAME}
        </a>

        {/** Toggle for mobile menu */}
        <button
          onClick={this.toggleMenu}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/** Search box */}
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search product..."
              onChange={this.onChange}
            />
            <input
              type="submit"
              value=""
              style={{ display: "none" }}
              name="query-input"
              id="query-input"
            />
            <label htmlFor="query-input" type="submit">
              <div className="input-group-append" style={{ height: "2.4rem" }}>
                <span className="input-group-text" id="basic-addon2">
                  <FontAwesomeIcon icon="search" />
                </span>
              </div>
            </label>
          </div>
        </form>

        {/** menu items */}
        <div
          className={cx("collapse navbar-collapse", {
            show: showMenu,
          })}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {NAV_MENU_ITEMS.map((item) => (
              <li className="nav-item active" key={item.key}>
                <a
                  className={cx("nav-link", {
                    "position-relative": item.link === "cart",
                  })}
                  href={item.link}
                >
                  {item.label}
                  {item.icon && item.iconColor && (
                    <FontAwesomeIcon icon={item.icon} color={item.iconColor} />
                  )}
                  {item.link === "cart" && (
                    <span className="cart-count">9</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
