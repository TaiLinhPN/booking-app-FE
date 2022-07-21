import { Link} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
 
import 'axios';


import axios from 'axios';

 const Login=()=> {
    // const [option, setOption] = useState('teacher');
     
    const [loginInput, setLogin] = useState({
        email: '',
        password:'',
        option:'teacher',
        error_list: []
    });
    
    // const handleInputoption = (e) => {
    //     const value = e.target.value;
    //     setOption(value);
    // }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...loginInput,
            [name]: value,
        })
    };

    const loginSubmit = (e) => {
        e.preventDefault();
       
        const bodyFormData = {
            email: loginInput.email,
            option: loginInput.option,
            password: loginInput.password
        }
         axios.post(`http://127.0.0.1:8000/api/login`,bodyFormData).then(res => {
            console.log('lỗi,',res.data.validation_errors);
               
                if (res.data.status === 200) {
                    console.log("thành công");
                }
                else {
                    console.log('không thành công');
                    setLogin({ ...loginInput, error_list: res.data.validation_errors  });
                   
                }    
            })  
    };
    
        return (
            <div>
                <div className="content-wrapper  js-content-wrapper">
                    <section className="form-page js-mouse-move-container">
                        <div className="form-page__img bg-dark-1">
                            <div className="form-page-composition">
                                <div className="-bg"><img data-move={30} className="js-mouse-move" src="img/login/bg.png" alt="bg" /></div>
                                <div className="-el-1"><img data-move={20} className="js-mouse-move" src="img/home-9/hero/bg.png" alt="image" /></div>
                                <div className="-el-2"><img data-move={40} className="js-mouse-move" src="img/home-9/hero/1.png" alt="icon" /></div>
                                <div className="-el-3"><img data-move={40} className="js-mouse-move" src="img/home-9/hero/2.png" alt="icon" /></div>
                                <div className="-el-4"><img data-move={40} className="js-mouse-move" src="img/home-9/hero/3.png" alt="icon" /></div>
                            </div>
                        </div>
                        <div className="form-page__content lg:py-50">
                            <div className="container">
                                <div className="row justify-center items-center">
                                    <div className="col-xl-6 col-lg-8">
                                        <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                                            <h3 className="text-30 lh-13">Login</h3>
                                            <p className="mt-10">Don't have an account yet? <Link to={'/SignUp'} className="button -sm -white text-dark-1 ml-30" href="#">Sign up for free</Link></p>
                                            <form className="contact-form respondForm__form row y-gap-20 pt-30" onSubmit={loginSubmit}>
                                                <div className="col-12">
                                                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Username Or Email</label>
                                                    <input type="text" name="email" placeholder="Username Or Email"  value ={loginInput.name} onChange={handleInput} />
                                                    <span>{loginInput.error_list.email}</span>
                                                  

                                                </div>
                                                <div className="col-12">
                                                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Job</label>
                                                    <select id="jobs"  name='option' onChange={handleInput}>
                                                        <option value="teacher">Teacher</option>
                                                        <option value="student">Student</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Password</label>
                                                    <input type="password" name="password" placeholder="Password"  value ={loginInput.password} onChange={handleInput}/>
                                                    <span>{loginInput.error_list.password}</span>
                                                    <span>{loginInput.error_list.password}</span>
                                             
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="button -md -green-1 text-dark-1 fw-500 w-1/1">
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="lh-12 text-dark-1 fw-500 text-center mt-20">Or sign in using</div>
                                            <div className="d-flex x-gap-20 items-center justify-between pt-20">
                                                <div><button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">Log In via Facebook</button></div>
                                                <div><button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">Log In via Google+</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
 
}
export default Login;
