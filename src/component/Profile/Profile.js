import React, { Component } from 'react';
// import Header from './Header';
import Menu from './Menu/Menu';
import CurrentProfile from './Account/CurrentProfile';
import Course from './Course/Course';
import routes_2 from '../../Routes/routes_2';
// import { Match } from 'react-router';
import {Route,Nav,NavLink , Switch ,Match, BrowserRouter, Router }from 'react-router-dom';
import Header from '../Header/Header';


// import Content2 from './Content/EditProfile';
// import Review from './Content/Review';
// import Footer from './Footer';




export default function Profile(){
  return (
    <>
      {/* <ContactUs /> */}
      <Header/>
      <BrowserRouter>
      <Menu></Menu>


    <Switch>
        
        {routes_2.map((route,index)=>(
        <Route key={index} path={route.path} component={route.main}  exact={route.exact} />
        
        )
        )}
      </Switch>
  </BrowserRouter>
      
    </>


);

// {/*     )}
}