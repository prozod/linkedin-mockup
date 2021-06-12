import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Posts.css";
import PublicIcon from "@material-ui/icons/Public";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
// import DeleteIcon from "@material-ui/icons/Delete";
import YouTube from "react-youtube";

const Posts = forwardRef(
  ({ id, name, description, message, url, image, video, time }, ref) => {
    // const deletePost = (e) => {
    //   db.collection("posts")
    //     .doc(e.target.closest(".post__header").getAttribute("data-id"))
    //     .delete()
    //     .then(() => {
    //       console.log("Document successfully deleted!");
    //     })
    //     .catch((error) => {
    //       console.error("Error removing document: ", error);
    //     });
    // };

    const timeRender = () => {
      const postingDate = time;
      const postDate = postingDate.toDate().toString();
      const date = postDate.slice(3, 15);
      let today = new Date(new Date().getTime()).toString().slice(3, 15);
      let yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
        .toString()
        .slice(3, 15);

      if (date === today) {
        return "Less than 24h ago";
      }
      if (date === yesterday) {
        return "Yesterday";
      }

      return date;
    };

    return (
      <div ref={ref} className="post">
        <div className="post__header" data-id={id}>
          <div className="post__author">
            <Avatar className="post__pfp" src={url}>
              {name[0]}
            </Avatar>
            <div className="post__info">
              <h5>{name}</h5>
              <p>{description}</p>
              <p className="postDate">
                {time && timeRender()} ∙
                <PublicIcon className="post__dateIcon" />
              </p>
            </div>
          </div>
          {/* <DeleteIcon className="post__delete" onClick={deletePost} /> */}
        </div>
        <div className="post__body">
          <p>{message}</p>
          <img src={image} alt="" />
          {video && <YouTube videoId={video} className="videoresponsive" />}
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
);

export default Posts;
