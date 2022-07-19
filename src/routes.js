


import React from 'react';
import Home from './component/Content/Home';
import Login from './component/Login/Login';
import SignUp from './component/Signup/Signup';
import ContactUs from './component/ContactUs';
const routes = [{
    path : '/',
	exact : true,
	main : ()=> <Home />
},
{
    path : '/Login',
	exact : true,
	main : ({history})=> <Login history={history} />
},
{
    path : '/SignUp',
	exact : true,
	main : ({history})=> <SignUp history={history} />
},
{
    path : '/ContactUs',
	exact : true,
	main : ({history})=> <ContactUs history={history} />
}
];
export default routes;