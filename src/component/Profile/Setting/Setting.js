import React,{ Component} from 'react';
import Menu from '../Menu/Menu';
import MenuSetting from '../Setting/MenuSetting/MenuSetting';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import {Route , Switch , BrowserRouter }from 'react-router-dom';
import routes_3 from '../../Routes/routes_3';
export default class Setting extends Component {
    render(){ return(
     
                <>
      {/* <ContactUs /> */}
      <BrowserRouter>
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Settings</h1>
              <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
            </div>
          </div>
          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="tabs -active-purple-2 js-tabs pt-0">
                    <MenuSetting></MenuSetting>
                </div></div></div></div></div></div>
      <Switch>
        
        {routes_3.map((route,index)=>(
        <Route key={index} path={route.path} component={route.main} exact={route.exact} />
        )
        )}
      </Switch>
      </BrowserRouter>
      
    </>



    )}
}