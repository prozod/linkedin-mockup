import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";

function Sidebar(props) {
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
        <BookmarkIcon />
        <p>My items</p>
      </div>
    </div>
  );
}

export default Sidebar;
