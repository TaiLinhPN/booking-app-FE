import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isTemplateSpan } from 'typescript';
// import axios from 'axios';

export default function CurrentProfile() {
  const [users, setUsers] = useState([]);
  const [option, setOption] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('user'));
    console.log(users)
    if (users) {
      setUsers(users);
    }
  }, []);
  useEffect(() => {
    const option = JSON.parse(localStorage.getItem('option'));
    console.log(option)
    if (option) {
      setOption(option);
    }
  }, [])
  console.log();
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
          <div className="row y-gap-20 x-gap-20 users-center">
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
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Bio</label>
            <p>{ users.biography }</p>
            {/* <input type="text" placeholder="First Name" /> */}
          </div>
          <div className="border-top-light pt-30 mt-30">
            <form action="#" className="contact-form row y-gap-30">

              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                <p>{ users.name }</p>
                {/* <input type="text" placeholder="First Name" /> */}
              </div>
              <div className="col-md-6">
                <label htmlFor="gender" className="text-16 lh-1 fw-500 text-dark-1 mb-10">Gender</label>
                <p>{ users.gender }</p>
                {/* <input type="text" placeholder="Last Name" /> */}
              </div>
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
                <p>{ users.phone }</p>
              </div>
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>
                <p>{ users.dob }</p>
              </div>

              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">City</label>
                <p>{ users.address }</p>
              </div>
              <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Country</label>
                <p>Việt Nam</p>
              </div>
              <div className="col-12">
                <Link to='/EditProfile'><button className="button -md -purple-1 text-white">Edit Profile</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}