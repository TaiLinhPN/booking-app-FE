import React, { Component } from 'react';
// import Header from './Header';
import Course from '../Course/Course';
import { Link} from 'react-router-dom';
export default class Menu extends Component {
    render() { return(
        <div className="content-wrapper js-content-wrapper">
        <div className="dashboard -home-9 js-dashboard-home-9">
        <div className="barba-container" data-barba="container">
        <main className="main-content">
        <div className="dashboard__sidebar scroll-bar-1">
            <div className="sidebar -dashboard">
              <div className="sidebar__item ">
                <Link to={'/CurrentProfile'}  href="#" className="d-flex items-center text-17 lh-1 fw-500">                  <i className="text-20 icon-discovery mr-15" />
 Profile </Link>

              </div>
              <div className="sidebar__item ">
                  <Link to={'/Course'}  href="#" className="d-flex items-center text-17 lh-1 fw-500"><i className="text-20 icon-play-button mr-15" /> Course </Link>


              </div>
              <div className="sidebar__item ">
                  <Link to={'/Review'}  href="#" className="d-flex items-center text-17 lh-1 fw-500">
                  <i className="text-20 icon-comment mr-15" />
                  Reviews </Link>

                 
                
              </div>
              <div className="sidebar__item ">
              <Link to={'/ForgetPassword'}  href="#" className="d-flex items-center text-17 lh-1 fw-500">
              <i className="text-20 icon-setting mr-15" />
                  Password </Link>
              </div>            

              <div className="sidebar__item ">
                <a href="#" className="d-flex items-center text-17 lh-1 fw-500 ">
                  <i className="text-20 icon-power mr-15" />
                  Logout
                </a>
              </div>
            </div>
          </div>
        

        </main>
        {/* <Content2></Content2> */}
        </div>
        </div>
        </div>


    )}
}