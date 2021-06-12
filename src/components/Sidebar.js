import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SidebarAccordion from "./SidebarAccordion";
import AccordionItems from "./AccordionItems";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

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
          src="https://source.unsplash.com/1600x900/?nature,water"
          alt="User wallpaper"
        />
        <Avatar className="sidebar__pfp" src={user.url}>
          {user.email[0]}
        </Avatar>
        <h3 className="sidebar__username">{user.displayName}</h3>
        <p className="sidebar__aboutme">{user.email}</p>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">
            {Math.floor(Math.random() * (1100 - 100 + 1)) + 100}
          </p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">
            {Math.floor(Math.random() * (2000 - 500 + 1)) + 500}
          </p>
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
