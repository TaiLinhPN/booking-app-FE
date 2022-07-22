import FooterCalender from "./FooterCalender"
import HeaderCalender from "./HeaderCalender"
import ModelCalender from "./ModelCalender"
import SitebarCalender from "./SitebarCalender"
import ViewCalender from "./ViewCalender"





function Calender() {
  
  return (
    <div class="preloader-visible" data-barba="wrapper">
      <div class="barba-container" data-barba="container">
        <main class="main-content">

          <HeaderCalender />

          <div class="content-wrapper js-content-wrapper">
            <div class="dashboard -home-9 js-dashboard-home-9">
              <SitebarCalender />
              < ViewCalender />
              
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