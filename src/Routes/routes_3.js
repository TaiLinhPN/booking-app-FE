import React from 'react';
import CurrentProfile from '../component/Profile/Account/CurrentProfile';
import ForgetPassword from '../component/Profile/ForgetPassword/ForgetPassword';
const routes_3 = [{

        path: '/CurrentProfile',
        exact : true,
        main : ({history})=> <CurrentProfile history={history} />   
},
{

    path: '/ForgetPassword',
    exact : true,
    main : ({history})=> <ForgetPassword history={history} />   
}]
export default routes_3;