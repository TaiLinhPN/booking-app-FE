import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function CurrentProfile() {

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
                <div className="text-16 fw-500 text-dark-1">Khánh Linh</div>
                <div className="text-14 lh-1 mt-10">Student</div>
                <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">

                </div>

              </div>

            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Bio</label>
              <p>I am a second-student at Passerellesnumeriques Vietnam</p>
              {/* <input type="text" placeholder="First Name" /> */}
            </div>
            <div className="border-top-light pt-30 mt-30">
              <form action="#" className="contact-form row y-gap-30">

                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                  <p>Khánh Linh</p>
                  {/* <input type="text" placeholder="First Name" /> */}
                </div>
                <div className="col-md-6">
                  <label for="gender" className="text-16 lh-1 fw-500 text-dark-1 mb-10">Gender</label>
                  <p>Female</p>
                  {/* <input type="text" placeholder="Last Name" /> */}
                </div>
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
                  <p>0838419958</p>
                </div>
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>
                  <p>20/11/2002</p>
                </div>

                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">City</label>
                  <p>Đà Nẵng</p>
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