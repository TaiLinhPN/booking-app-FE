import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";


const EditProfile = () => {
  const [option, setOption] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const option = JSON.parse(localStorage.getItem('option'));
    // console.log(option)
    if (option) {
      setOption(option);
      console.log(option);
    }
  }, []);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('user'));
    // console.log(users)
    if (users) {
      setUsers(users);
    }
  }, []);
  const [userInput, setUser] = useState({
    name: "",
    gender: "",
    phone: "",
    dob: "",
    address: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...userInput,
      [name]: value,
    });
  };
  const updateSubmit = (e) => {
    e.preventDefault();
    const bodyFormData = {
      name: userInput.name,
      gender: userInput.gender,
      phone: userInput.phone,
      address: userInput.address,
      dob: userInput.dob,
      option: option,
    };
    axios.post(`http://127.0.0.1:8000/api/update/` + users.id, bodyFormData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "failed") {
          console.log(res.data.errors);
        }
        else {
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(res.data.data));
          console.log('User updated');
        }
      })
      .catch((err) => {
        console.log(err);
        console.log('Update car Error');
      });
  };

  return (

    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Profile</h1>
            <div className="mt-10">"Genius is 1% talent and 99% percent hard work" - Albert Einstein</div>
          </div>
        </div>
      </div>


      <div className="tabs__content py-30 px-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-active">
          <div className="row y-gap-20 x-gap-20 items-center">
            <div className="col-auto">
              <img className="size-100" src="img/dashboard/avatars/myself.gif" alt="image" />
            </div>
            <div className="col-auto">
              <div className="text-16 fw-500 text-dark-1">{ users.name }</div>
              <div className="text-14 lh-1 mt-10">{ option }</div>
              <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">{ users.biography }</label>
            <br></br><textarea cols={100} rows={5} placeholder="Bio" />
            {/* <input type="text" placeholder="First Name" /> */}
          </div>
          <div className="border-top-light pt-30 mt-30">
            <form action="#" className="contact-form row y-gap-30">
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                <input type="text" name="name" placeholder="Name" onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <label htmlFor="Gender" className="text-16 lh-1 fw-500 text-dark-1 mb-10">Gender</label>
                <select id="Gender" name="gender" onChange={handleInput}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
                <input type="text" name="phone" placeholder="Phone" onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>
                <input type="date" name="dob" placeholder="Birthday" onChange={handleInput} />
              </div>

              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">City</label>
                <input type="text" name="address" placeholder="City" onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Country</label>
                <input type="text" placeholder="Country" />
              </div>

              <div className="col-12">
                <Link to='/CurrentProfile'><button className="button -md -purple-1 text-white" onClick={updateSubmit}>Save Profile</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
export default EditProfile;