import FooterCalender from "./FooterCalender"
import HeaderCalender from "./HeaderCalender"
import ModelCalender from "./ModelCalender"
import SitebarCalender from "./SitebarCalender"
import ViewCalender from "./ViewCalender"
import CreateCalender from "./CreateCalender"

import { useState } from "react";


function Calender() {
  const [state , setState] = useState(false)
    const Toggle = () =>{
        setState(!state)
    }
  return (
    <div class="preloader-visible" data-barba="wrapper">
      <div class="barba-container" data-barba="container">
        <main class="main-content">

          <HeaderCalender />

          <div class="content-wrapper js-content-wrapper">
            <div class="dashboard -home-9 js-dashboard-home-9">
              <SitebarCalender />
              < ViewCalender />
              <button onClick={Toggle}>Toggle</button>
            {state && <CreateCalender/>}
            </div>
          </div>
          
        </main>
        <FooterCalender />
        <ModelCalender />
      </div>


    </div>
  )
}

export default Calender