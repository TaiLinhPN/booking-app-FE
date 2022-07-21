import React, { Component } from "react";

import { Link } from "react-router-dom";
function Links(props) {
    return (
      <li>
        <Link to={props.link} className="nav-link" href="#"> {props.name}</Link>
      </li>
    );
  }
  
function Header() {
  return (
    <div>
      <div className="header -type-1 js-header">
        <div className="header__container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo ">
                  <a data-barba href="index.html">
                    <img className="header__img" src="img/general/logop.png" alt="logo" />
                  </a>

                </div>
              </div>
            </div>
            <div className="header-menu js-mobile-menu-toggle ">
              <div className="header-menu__content">
                <div className="menu js-navList">
                  <ul className="menu__nav text-white -is-active">
                  <Links name="Home" link="/"/>
                  <Links name="Profile" link="/Profile"/>
                  <Links name="Contactus" link="/ContactUs" />   
                  </ul>                     
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                  <Link
                    to={"/Login"}
                    className="button -underline text-white"
                    href="#">
                    Log in
                  </Link>
                  <Link
                    to={"/SignUp"}
                    className="button -sm -white text-dark-1 ml-30"
                    href="#">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
