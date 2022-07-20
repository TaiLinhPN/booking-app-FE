import React,{ Component} from 'react';
import { Link} from 'react-router-dom';
export default class MenuSetting extends Component {
    render(){ return(
        <div className="tabs__controls d-flex x-gap-30 items-center pt-20 px-30 border-bottom-light js-tabs-controls">
        <button className="tabs__button text-light-1 js-tabs-button is-active" data-tab-target=".-tab-item-1" type="button">
            <Link to={'/EditProfile'}>Edit Profile</Link>
          
        </button>
        <button className="tabs__button text-light-1 js-tabs-button" data-tab-target=".-tab-item-2" type="button">
        <Link to={'/ForgetPassword'}>Password</Link>
        </button>
        <button className="tabs__button text-light-1 js-tabs-button" data-tab-target=".-tab-item-3" type="button">
          Social Profiles
        </button>
        <button className="tabs__button text-light-1 js-tabs-button" data-tab-target=".-tab-item-4" type="button">
          Notifications
        </button>
        <button className="tabs__button text-light-1 js-tabs-button" data-tab-target=".-tab-item-5" type="button">
          Close Account
        </button>
      </div>
    )}
}