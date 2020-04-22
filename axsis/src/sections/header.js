import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import { HashLink as Link } from "react-router-hash-link";
import { NavHashLink as NavLink } from "react-router-hash-link";
import "./../css/header.css";

class Header extends Component {
  menuTrigger() {
    document.querySelector("body").classList.add("mobile-menu-open");
  }
  closeMenuTrigger() {
    document.querySelector("body").classList.remove("mobile-menu-open");
  }
  render() {
    const { headerStyle } = this.props;

    var elements = document.querySelectorAll(".has-childmenu > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const style = {
      backgroundColor: "#273167",
      color: "white",
    };

    return (
      <header className={`header ${headerStyle}`}>
        <div id="mainNav" className="axsis-main-menu-area header--fixed">
          <div className="container">
            <div className="row m-0 align-items-center">
              <div className="col-lg-2 p-0 d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link className="navbar-brand navbar-brand1" to="/#">
                    <img
                      src="assets/images/BacklessNavbar.png"
                      style={{ height: "50px" }}
                      alt="logo"
                    />
                  </Link>
                  <Link className="navbar-brand navbar-brand2" to="/#">
                    <img
                      src="assets/images/Cropped.png"
                      style={{ height: "50px" }}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="menu-bar d-lg-none" onClick={this.menuTrigger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end">
                <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">
                  <Link to="/#" className="logo">
                    <img
                      src="assets/images/BacklessNavbar.png"
                      style={{ height: "50px" }}
                      alt="logo"
                    />
                  </Link>
                  <span
                    className="close-button"
                    onClick={this.closeMenuTrigger}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <Scrollspy
                  className="custom-border-top nav-menu d-lg-flex flex-wrap list-unstyled mr_lg--50  mb-0 justify-content-center"
                  items={[
                    "banner",
                    "feature",
                    "screenshot",
                    "pricing",
                    "testimonial",
                    "blog",
                    "contact",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <Link to="/#">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#feature">
                      <span>Features</span>
                    </Link>
                  </li>
                  <li>
                    <NavLink
                      activeStyle={style}
                      onClick={this.closeMenuTrigger}
                      to="/blog-list-left-sidebar"
                    >
                      <span>Docs</span>
                    </NavLink>
                  </li>
                </Scrollspy>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
