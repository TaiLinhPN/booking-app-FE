import React, { Component } from 'react';
// import Header from './Header';
import Menu from './Menu/Menu';

import Course from './Course/Course';
import routes_2 from "../Routes/routes_2";
import {Route , Switch , BrowserRouter }from 'react-router-dom';


// import Content2 from './Content/EditProfile';
// import Review from './Content/Review';
// import Footer from './Footer';




export default function Profile(){
  return (
    <>
      {/* <ContactUs /> */}
      <BrowserRouter>
      <Menu></Menu>
    
      <Switch>
        
        {routes_2.map((route,index)=>(
        <Route key={index} path={route.path} component={route.main} exact={route.exact} />
        )
        )}
      </Switch>
      </BrowserRouter>
      
    </>


);

// {/*     )}
}