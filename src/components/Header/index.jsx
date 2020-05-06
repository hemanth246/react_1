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
      catDropdown: "",
      activeMenuItem: "",
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

  onMouseEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const activeMenuItem = e.currentTarget.getAttribute("data-data");

    this.setState({ activeMenuItem });
  };

  onMouseLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ activeMenuItem: "", catDropdown: "" });
  };

  onClickCatDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const catDropdown = e.currentTarget.getAttribute("data-data");

    this.setState((pS) => ({
      catDropdown: pS.catDropdown === catDropdown ? "" : catDropdown,
    }));
  };

  render() {
    const { showMenu, catDropdown, activeMenuItem } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand font-pacifico" href="#">
          <FontAwesomeIcon icon={SITE_LOGO} size="2x" color="green" />
          <span className="site-name">{SITE_NAME}</span>
        </a>

        {/** Search box */}
        <form className="form-inline mt-3" onSubmit={this.onSubmit}>
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

        {/** menu items */}
        <div
          className={cx("collapse navbar-collapse", {
            show: showMenu,
          })}
        >
          <ul className="navbar-nav ml-auto">
            {NAV_MENU_ITEMS.map((item) => {
              const hasDropdown = item.subItems.length > 0;
              const isDropdownOpen = hasDropdown && catDropdown === item.link;
              const isActive = activeMenuItem === item.link;
              const linkProps = {
                className: cx("nav-link", {
                  "position-relative": item.link === "cart",
                  "dropdown-toggle": hasDropdown,
                }),
                href: item.link,
                "data-data": item.link,
              };

              if (hasDropdown) {
                linkProps.onClick = this.onClickCatDropdown;
              }

              return (
                <li
                  className={cx("nav-item", {
                    show: isDropdownOpen,
                    dropdown: hasDropdown,
                    "bg-primary": isActive,
                  })}
                  data-data={item.link}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  key={item.key}
                >
                  <a {...linkProps}>
                    {item.label}&nbsp;
                    {item.icon && item.iconColor && (
                      <FontAwesomeIcon
                        icon={item.icon}
                        color={item.iconColor}
                      />
                    )}
                    {item.link === "cart" && (
                      <span className="cart-count">9</span>
                    )}
                  </a>
                  {isDropdownOpen && (
                    <div className="dropdown-menu show">
                      {item.subItems.map((subItem) => {
                        if (subItem.isDivider) {
                          return <div className="dropdown-divider"></div>;
                        }

                        return (
                          <a
                            key={subItem.key ? subItem.key : uuidv4()}
                            className="dropdown-item"
                            href={subItem.link}
                            data-data={subItem.label}
                          >
                            {subItem.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
