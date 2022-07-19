import React, { Component } from "react";
import { Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div  className="header -type-1 js-header">
                    <div className="header__container">
                        <div className="row justify-between items-center">
                            <div className="col-auto">
                                <div className="header-left">
                                    <div className="header__logo ">
                                        <a data-barba href="index.html">
                                            <img src="img/general/logo.svg" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none">
                                        <a href="#" className="d-flex items-center" data-el-toggle=".js-explore-toggle">
                                            <i className="icon icon-explore mr-15" />
                                            Explore
                                        </a>
                                        <div className="explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle">
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Architecture<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Business<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                   
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="text-dark-1">Computer Programming</a>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="text-dark-1">Data Analysis</a>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Design<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                  
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="courses-single-6.html" className="text-dark-1">Education</a>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Electronics<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                   -
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Language<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                   
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Marketing<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                    
                                               
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="text-dark-1">Music Arts</a>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="text-dark-1">Social Science</a>
                                            </div>
                                            <div className="explore__item">
                                                <a href="#" className="d-flex items-center justify-between text-dark-1">
                                                    Photography &amp; Video<div className="icon-chevron-right text-11" />
                                                </a>
                                                <div className="explore__subnav rounded-8">
                                                    <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                                    <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                                   
                                                </div>
                                            </div>
                                            <div className="explore__item">
                                                <a href="courses-single-1.html" className="text-dark-1">IT &amp; Software</a>
                                            </div>
                                            <div className="explore__item">
                                                <a href="courses-single-2.html" className="text-purple-1 underline">View All Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-menu js-mobile-menu-toggle ">
                                <div className="header-menu__content">
                                    <div className="mobile-bg js-mobile-bg" />
                                    <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                                        <a href="login.html" className="text-dark-1">Log in</a>
                                        <a href="signup.html" className="text-dark-1 ml-30">Sign Up</a>
                                    </div>
                                    <div className="menu js-navList">
                                        <ul className="menu__nav text-white -is-active">
                                            <li className="menu-item-has-children">
                                            <Link to={'/'} className="nav-link" href="#">Home
 <i className="icon-chevron-right text-13 ml-10" /></Link>
                                                
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Home</a>
                                                    </li>
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="home-2.html">Home 2</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children -has-mega-menu">
                                                <a data-barba href="#">Courses <i className="icon-chevron-right text-13 ml-10" /></a>
                                                <div className="mega xl:d-none">
                                                    <div className="mega__menu">
                                                        <div className="row x-gap-40">
                                                            <div className="col">
                                                                <h4 className="text-17 fw-500 mb-20">Course List Layouts</h4>
                                                                <ul className="mega__list">
                                                                    <li><a data-barba href="courses-list-1.html">Course List v1</a></li>
                                                                    <li><a data-barba href="courses-list-2.html">Course List v2</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h4 className="text-17 fw-500 mb-20">Course Single Layouts</h4>
                                                                <ul className="mega__list">
                                                                    <li><a data-barba href="courses-single-1.html">Course Single v1</a></li>
                                                                    <li><a data-barba href="courses-single-2.html">Course Single v2</a></li>
                                                                  
                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h4 className="text-17 fw-500 mb-20">About Courses</h4>
                                                                <ul className="mega__list">
                                                                    <li><a data-barba href="lesson-single-1.html">Lesson Page v1</a></li>
                                                                    <li><a data-barba href="lesson-single-2.html">Lesson Page v2</a></li>
                                                                   
                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h4 className="text-17 fw-500 mb-20">Dashboard Pages</h4>
                                                                <ul className="mega__list">
                                                                    <li><a data-barba href="dashboard.html">Dashboard</a></li>
                                                                    <li><a data-barba href="dshb-courses.html">My Courses</a></li>
                                                                    
                                                                    
                                                                </ul>
                                                            </div>
                                                            <div className="col">
                                                                <h4 className="text-17 fw-500 mb-20">Popular Courses</h4>
                                                                <ul className="mega__list">
                                                                    <li><a data-barba href="#">Web Developer</a></li>
                                                                    <li><a data-barba href="#">Mobile Developer</a></li>
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="mega-banner bg-purple-1 ml-40">
                                                            <div className="text-24 lh-15 text-white fw-700">
                                                                Join more than<br />
                                                                <span className="text-green-1">8 million learners</span>
                                                                worldwide
                                                            </div>
                                                            <a href="#" className="button -md -green-1 text-dark-1 fw-500 col-12">Start Learning For Free</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="subnav d-none xl:d-block">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Courses</a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Course List Layouts<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Course List Layouts</a>
                                                            </li>
                                                            <li>
                                                                <a href="courses-list-1.html">Course List v1</a>
                                                            </li>
                                                           
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Course Single Layouts<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Course Single Layouts</a>
                                                            </li>
                                                            <li>
                                                                <a href="courses-single-1.html">Course Single v1</a>
                                                            </li>
                                                          
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">About Courses<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> About Courses</a>
                                                            </li>
                                                            <li>
                                                                <a href="lesson-single-1.html">Lesson Page v1</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Dashboard Pages<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Dashboard Pages</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard.html">Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href="dshb-courses.html">My Courses</a>
                                                            </li>
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Popular Courses<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Popular Courses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Web Developer</a>
                                                            </li>
                                                           
                                                            <li>
                                                                <a href="#">View All Courses</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a data-barba href="#">Events <i className="icon-chevron-right text-13 ml-10" /></a>
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Events</a>
                                                    </li>
                                                    <li><a href="event-list-1.html">Event List 1</a></li>
                                                    <li><a href="event-list-2.html">Event List 2</a></li>
                                               
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a data-barba href="#">Blog <i className="icon-chevron-right text-13 ml-10" /></a>
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Blog</a>
                                                    </li>
                                                    <li><a href="blog-list-1.html">Blog List 1</a></li>
                                                    <li><a href="blog-list-2.html">Blog List 2</a></li>
                                                 
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a data-barba href="#">
                                                    Pages <i className="icon-chevron-right text-13 ml-10" />
                                                </a>
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Pages</a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">About Us<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> About Us</a>
                                                            </li>
                                                            <li>
                                                                <a href="about-1.html">About 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="about-2.html">About 2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Contact<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Contact</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact-1.html">Contact 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact-2.html">Contact 2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Shop<div className="icon-chevron-right text-11" /></a>
                                                        <ul className="subnav">
                                                            <li className="menu__backButton js-nav-list-back">
                                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Shop</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-cart.html">Shop Cart</a>
                                                            </li>
                                                           
                                                        </ul>
                                                    </li>
                                                   
                                                </ul>
                                            </li>
                                            <li>
                                            <Link to={'/ContactUs'} className="nav-link" href="#">ContactUs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                                        <div className="mobile-footer__number">
                                            <div className="text-17 fw-500 text-dark-1">Call us</div>
                                            <div className="text-17 fw-500 text-purple-1">800 388 80 90</div>
                                        </div>
                                        <div className="lh-2 mt-10">
                                            <div>329 Queensberry Street,<br /> North Melbourne VIC 3051, Australia.</div>
                                            <div>hi@educrat.com</div>
                                        </div>
                                        <div className="mobile-socials mt-10">
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-instagram" />
                                            </a>
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-menu-close" data-el-toggle=".js-mobile-menu-toggle">
                                    <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                                        <div className="icon-close text-dark-1 text-16" />
                                    </div>
                                </div>
                                <div className="header-menu-bg" />
                            </div>
                            <div className="col-auto">
                                <div className="header-right d-flex items-center">
                                    <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                                    <Link to={'/Login'}  className="button -underline text-white" href="#">Log in</Link>
                                    <Link to={'/SignUp'} className="button -sm -white text-dark-1 ml-30" href="#">Sign up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
