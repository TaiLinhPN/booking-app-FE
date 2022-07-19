import React, { Component } from 'react';
//import Home from "./component/Content/Home";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header"
import routes from "./routes";
import {Route , Switch , BrowserRouter }from 'react-router-dom';
function App() {
  return (
    <>
      {/* <ContactUs /> */}
      <BrowserRouter>
      <Header></Header>
    
      <Switch>
        
        {routes.map((route,index)=>(
        <Route key={index} path={route.path} component={route.main} exact={route.exact} />
        )
        )}
      </Switch>
      <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
