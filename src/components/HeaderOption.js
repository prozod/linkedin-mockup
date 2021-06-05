import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ profilepicture, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {profilepicture && (
        <Avatar className="headerOption__icon" src={user?.url}>
          {user?.email[0]}
        </Avatar>
      )}
      <h5 className="headerOption__title">{title}</h5>
    </div>
  );
}

export default HeaderOption;
