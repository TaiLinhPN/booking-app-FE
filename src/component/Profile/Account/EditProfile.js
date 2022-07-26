import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function EditProfile () {
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
                <div className="text-16 fw-500 text-dark-1">Khanh Linh</div>
                <div className="text-14 lh-1 mt-10">Student</div>
                <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Bio</label>
              <br></br><textarea cols={100} rows={5} placeholder="Bio" />
              {/* <input type="text" placeholder="First Name" /> */}
            </div>
            <div className="border-top-light pt-30 mt-30">
              <form action="#" className="contact-form row y-gap-30">
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <label for="Gender" className="text-16 lh-1 fw-500 text-dark-1 mb-10">Gender</label>
                  <select id="Gender" name="Gender">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>
                  <input type="date" placeholder="Birthday" />
                </div>

                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">City</label>
                  <input type="text" placeholder="City" />
                </div>
                <div className="col-md-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Country</label>
                  <input type="text" placeholder="Country" />
                </div>

                <div className="col-12">
                  <Link to='/CurrentProfile'><button className="button -md -purple-1 text-white">Save Profile</button></Link>            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
