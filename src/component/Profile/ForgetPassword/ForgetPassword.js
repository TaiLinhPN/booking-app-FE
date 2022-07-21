import React,{ Component} from 'react';
export default class ForgetPassword extends Component {
    render() {
        return (
        <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Passwords</h1>
            <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
            <div className="tabs__content py-30 px-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-active">
        <div className="row y-gap-20 x-gap-20 items-center">


        <form action="#" className="contact-form row y-gap-30">
          <div className="col-md-7">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Current password</label>
            <input type="text" placeholder="Current password" />
          </div>
          <div className="col-md-7">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">New password</label>
            <input type="text" placeholder="New password" />
          </div>
          <div className="col-md-7">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Confirm New Password</label>
            <input type="text" placeholder="Confirm New Password" />
          </div>
          <div className="col-12">
            <button className="button -md -purple-1 text-white">Save Password</button>
          </div>
        </form>
      </div>

        </div>
      </div>
      </div>
          </div>
        </div>
      </div>
    


       )
    }
}