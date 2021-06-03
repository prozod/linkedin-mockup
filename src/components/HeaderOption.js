import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ profilepicture, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {profilepicture && (
        <Avatar className="headerOption__icon" src={profilepicture} />
      )}
      <h5 className="headerOption__title">{title}</h5>
    </div>
  );
}

export default HeaderOption;
