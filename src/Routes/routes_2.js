import Review from '../component/Profile/Review/Review';
import Setting from '../component/Profile/Setting/Setting';
import Course from '../component/Profile/Course/Course';
import CurrentProfile from '../component/Profile/Account/CurrentProfile';
import ForgetPassword from '../component/Profile/ForgetPassword/ForgetPassword';
import EditProfile from '../component/Profile/Account/EditProfile';
const routes_2 =[
    {
        path : '/Course',
        exact : true,
        main : ({history})=> <Course history={history} />
    },
    
{
    path : '/Review',
	exact : true,
	main : ({history})=> <Review history={history} />
}
,
{
    path : '/Setting',
	exact : true,
	main : ({history})=> <Setting history={history} />
},{
    path: '/CurrentProfile',
    exact: true,
    main: ({history})=> <CurrentProfile history={history} />
},
{

    path: '/ForgetPassword',
    exact : true,
    main : ({history})=> <ForgetPassword history={history} />   
}
,
{

    path: '/EditProfile',
    exact : true,
    main : ({history})=> <EditProfile history={history} />   
}


]
export default routes_2;