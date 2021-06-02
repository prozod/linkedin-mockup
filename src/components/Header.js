import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="LinkedIn Logo"
          />

          <div className="header__search">
            <SearchIcon className="header__searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messaging" Icon={TextsmsIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />
          <HeaderOption
            profilepicture="https://randomuser.me/api/portraits/men/47.jpg"
            title="Me"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
