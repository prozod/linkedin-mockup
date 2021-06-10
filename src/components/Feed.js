import React, { useState, useEffect, useRef } from "react";
import "./Feed.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import Posts from "./Posts";
import { db } from "./Firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import NewPostModal from "./NewPostModal";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  // const submitPost = (e) => {
  //   e.preventDefault();

  //   db.collection("posts").add({
  //     name: user.displayName,
  //     description: user.email,
  //     message: input,
  //     url: user.url,
  //     time: firebase.firestore.FieldValue.serverTimestamp(),
  //   });

  //   setInput("");
  // };

  //postmodalRef is undefined until 'closeModal is true', hmmm

  return (
    <div className="feed">
      <div className="feed__inputArea">
        <div className="feed__input">
          <Avatar className="feed__pfp" src={user.url} />
          {/* <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
              onClick={() => {
                setCloseModal(!closeModal);
              }}
            />

            <button type="submit" onClick={submitPost}>
              Post
            </button>
          </form> */}
          <button
            aria-label="newpost"
            onClick={() => {
              setCloseModal(!closeModal);
            }}
          >
            Start a post
          </button>
        </div>
        <NewPostModal closeModal={closeModal} setCloseModal={setCloseModal} />
        <div className="feed__inputOptions">
          <InputOption
            text={"Photo"}
            color={"#70B5F9"}
            Image={PhotoSizeSelectActualIcon}
          />
          <InputOption text={"Video"} color={"#7FC15E"} Image={VideocamIcon} />
          <InputOption text={"Event"} color={"#E7A33E"} Image={EventIcon} />
          <InputOption
            text={"Write article"}
            color={"#F5987E"}
            Image={DescriptionIcon}
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, url } }) => {
        return (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            url={url}
          />
        );
      })}
    </div>
  );
}

export default Feed;
