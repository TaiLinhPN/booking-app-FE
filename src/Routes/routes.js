import React from 'react';
import Home from '../component/Content/Home';
import Login from '../component/Login/Login';
import SignUp from '../component/Signup/Signup';
import ContactUs from '../component/contact/ContactUs';
import Profile from '../component/Profile/Profile';
import Calender  from '../component/calender/Calender';

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
    path : '/calender',
	exact : true,
	main : ({history})=> <Calender history={history} />
},
{
    path : '/ContactUs',
	exact : true,
	main : ({history})=> <ContactUs history={history} />
},
{
	path: '/Profile',
	exact : true,
	main : ({history})=> <Profile history={history} />
}
];
export default routes;