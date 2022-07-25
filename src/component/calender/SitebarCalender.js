import EventEmitter from "../../utils/EventEmitter"

function SidebarItem(props) {
  return (
    <div onClick={props.function} className="sidebar__item  -dark-bg-dark-2">
      <div className="d-flex items-center text-17 lh-1 fw-500">
        <i className={props.icon}></i>
        {props.name}
      </div>
    </div>
  )
}

function SitebarCalender() {
  const toggleValender = () => {
    EventEmitter.emit('changeState')
  }
  return (
    <div className="dashboard__sidebar scroll-bar-1">


      <div className="sidebar -dashboard">

        {/* <div className="sidebar__item -is-active -dark-bg-dark-2">
          <a href="dashboard.html" className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white">
            <i className="text-20 icon-discovery mr-15"></i>
            Dashboard
          </a>
        </div> */}
        <SidebarItem name="My Courses" icon="text-20 icon-play-button mr-15" />
        <SidebarItem name="Create Course" icon="text-20 icon-list mr-15" function={() => toggleValender()} />
      </div>


    </div>
  )
}

export default SitebarCalender