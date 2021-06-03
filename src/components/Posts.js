import { Avatar } from "@material-ui/core";
import React from "react";
import "./Posts.css";
import PublicIcon from "@material-ui/icons/Public";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";

function Posts({ name, description, message, url, date }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__pfp" />
        <div className="post__info">
          <h5>{name}</h5>
          <p>{description}</p>
          <p>
            {date} ∙
            <PublicIcon className="post__dateIcon" />
          </p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          Image={ThumbUpOutlinedIcon}
          text={"Like"}
          color={"#555555"}
        />
        <InputOption
          Image={ChatOutlinedIcon}
          text={"Comment"}
          color={"#555555"}
        />
        <InputOption
          Image={RedoOutlinedIcon}
          text={"Share"}
          color={"#555555"}
        />
        <InputOption
          Image={NearMeOutlinedIcon}
          text={"Send"}
          color={"#555555"}
        />
      </div>
    </div>
  );
}

export default Posts;
