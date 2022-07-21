import React, { Component } from "react";
import { Link } from "react-router-dom";
function Links(props) {
  return (
    <li>
      <Link to={props.link} className="nav-link" href="#"> {props.name}</Link>
    </li>
  );
}
function Footer() {
  return (
    <footer className="footer -type-1 bg-dark-1 -green-links">
      <div className="container">
        <div className="footer-header">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
                <img src="img/general/logop.png" alt="logo" />
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-white">
                  Follow us on social media
                </div>
                <div className="footer-header-socials__list">
                  <a href="#">
                    <i className="icon-facebook" />
                  </a>
                  <a href="#">
                    <i className="icon-twitter" />
                  </a>
                  <a href="#">
                    <i className="icon-instagram" />
                  </a>
                  <a href="#">
                    <i className="icon-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <div className="row y-gap-30">
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                ABOUT
              </div>
              <div className="d-flex y-gap-10 flex-column">
                  <Links name="About us" link="/"/>
                  <Links name="Profile" link="/Profile"/>
                  <Links name="Contactus" link="/ContactUs" />   
              </div>
            </div>
            <div className="col-xl-4 col-lg-8">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                CATEGORIES
              </div>
              <div className="row justify-between y-gap-20">
                <div className="col-md-6">
                  <div className="d-flex y-gap-10 flex-column">
                  <Links name="Booking" link="/"/>
                  <Links name="Learning with us" link="/Profile"/>
                  <Links name="Let's do it" link="/ContactUs" />   
                  </div>
                </div>
                <div className="col-md-6">
                  
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                SUPPORT
              </div>
              <div className="d-flex y-gap-10 flex-column">
                  <Links name="Documentation" link="/"/>
                  <Links name="Benifit" link="/"/>
                  <Links name="Contactus" link="/ContactUs" />   
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                GET IN TOUCH
              </div>
              <div className="footer-columns-form">
                <div>We don’t send spam so don’t worry.</div>
                <form action="https://creativelayers.net/themes/educrat-html/post">
                  <div className="form-group">
                    <input type="text" placeholder="Email..." />
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="py-30 border-top-light-15">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center h-100 text-white">
                © 2022 Freesource_Ontop. All Right Reserved.
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15 text-white">
                    <a href="help-center.html">Help</a>
                    <a href="terms.html">Privacy Policy</a>
                    <a href="terms.html">Security</a>
                    <a href="terms.html">Terms of Use</a>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="button px-30 h-50 -dark-6 rounded-200 text-white"
                  >
                    <i className="icon-worldwide text-20 mr-15" />
                    <span className="text-15">English</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
