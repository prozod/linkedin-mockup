import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SidebarAccordion from "./SidebarAccordion";
import AccordionItems from "./AccordionItems";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1619167778912-12c028966790?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80"
          alt="User wallpaper"
        />
        <Avatar
          className="sidebar__pfp"
          src="https://randomuser.me/api/portraits/men/47.jpg"
        />
        <h3 className="sidebar__username">Jake Mason</h3>
        <p className="sidebar__aboutme">
          Front End Developer | JavaScript | ReactJS | CSS
        </p>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">852</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">1473</p>
        </div>
      </div>

      <div className="sidebar__premium">
        <p>Access exclusive tools & insights</p>
        <p>
          <img src="https://svgshare.com/i/Xn3.svg" alt="" />
          Try Premium free for 1 Month
        </p>
      </div>

      <div className="sidebar__itemsbutton">
        <BookmarkIcon className="sidebar__itemsIcon" />
        <p>My items</p>
      </div>

      <div className="sidebar__bottom">
        <SidebarAccordion class={"sidebar__recent"} title={"Recent"}>
          {recentItem("JavaScript")}
          {recentItem("softwareengineer")}
          {recentItem("softwaredevelopment")}
          {recentItem("sveltejs")}
          {recentItem("react&redux")}
          {recentItem("design")}
        </SidebarAccordion>

        <SidebarAccordion class={"sidebar__groups"} title={"Groups"}>
          <AccordionItems children={"Javascript"} />
          <AccordionItems children={"Ruby on Rails"} />
          <AccordionItems children={"Stackoverflow Xtremists"} />
        </SidebarAccordion>

        <div className="sidebar__groups">
          <p>
            Events
            <span>
              <AddIcon />
            </span>
          </p>
        </div>

        <SidebarAccordion class={"sidebar__groups"} title={"Followed Hashtags"}>
          {recentItem("softwareengineering")}
          {recentItem("softwaredevelopment")}
          {recentItem("reactjs")}
          {recentItem("frontendjobs")}
          {recentItem("angular")}
        </SidebarAccordion>
        <div className="sidebar__discover">
          <p>Discover more</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
