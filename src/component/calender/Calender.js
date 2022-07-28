import FooterCalender from "./FooterCalender"
import HeaderCalender from "./HeaderCalender"
import ModelCalender from "./ModelCalender"
import SitebarCalender from "./SitebarCalender"
import ViewCalender from "./ViewCalender"
import CreateCalender from "./CreateCalender"

import {useState, useEffect} from "react"
import  EventEmitter  from "../../utils/EventEmitter"

function Calender() {
  const [state, setState] = useState(true)

  const onNewClick = () =>{
    setState(!state);
  }

  useEffect(()=>{
    const listener = EventEmitter.addListener('changeState',onNewClick)
    return ()=>{
        listener.remove();
    }
  },[state])

  
  return (
    <div class="preloader-visible" data-barba="wrapper">
      <div class="barba-container" data-barba="container">
        <main class="main-content">

          {/* <HeaderCalender />

          <div class="content-wrapper js-content-wrapper">
            <div class="dashboard -home-9 js-dashboard-home-9">
              <SitebarCalender />
              {state && < ViewCalender />}
              {!state && < CreateCalender />}
              
            </div>
          </div> */}
          
        </main>
        <FooterCalender />
        <ModelCalender />
      </div>


    </div>
  )
}

export default Calender