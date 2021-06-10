import React, { useState, useEffect, useRef, useCallback } from "react";
import { Avatar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { db } from "./Firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useSpring, animated } from "react-spring";
import "./NewPostModal.css";
import "./UploadImage.css";
import ReactPlayer from "react-player";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import YouTubeIcon from "@material-ui/icons/YouTube";

function NewPostModal({ closeModal, setCloseModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: closeModal ? 1 : 0,
    transform: closeModal ? `scale(1)` : `scale(0.8)`,
  });

  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [sharePic, setSharePic] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    const storageRef = db.storage().ref();
    const imageRef = storageRef.child(image.name);
    imageRef.put(image).then(() => {
      console.log("Uploaded image", image.name);
    });

    if (image === "" || image === undefined) {
      alert(`Not an image, the file is a ${typeof image}.`);
      return;
    }

    setSharePic(image);
  };

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

  const submitPost = (e) => {
    e.preventDefault();

    if (input.trim().length <= 0) {
      alert("You cannot submit an empty message.");
      return;
    }

    if (input.trim().length > 0) {
      db.collection("posts")
        .add({
          name: user.displayName,
          description: user.email,
          message: input,
          url: user.url,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setInput("");
      setSharePic("");
      setVideoLink("");
      setAssetArea("");
      setCloseModal(false);
    }
  };

  const modalClose = (e) => {
    if (modalRef.current === e.target) {
      setCloseModal(false);
    }
  };

  const keypressClose = useCallback(
    (e) => {
      if (e.key === "Escape" && closeModal) {
        setCloseModal(false);
      }
    },
    [setCloseModal, closeModal]
  );

  const switchAssetArea = (area) => {
    setSharePic("");
    setVideoLink("");
    setAssetArea(area);
  };

  useEffect(() => {
    document.addEventListener("keydown", keypressClose);
    return () => {
      document.removeEventListener("keydown", keypressClose);
    };
  }, [keypressClose]);

  function UploadImage(props) {
    return <>{props.children}</>;
  }

  return (
    <>
      {closeModal ? (
        <div className="modal__blackscreen" ref={modalRef} onClick={modalClose}>
          <animated.div style={animation} className="modal__container">
            <div className="modal__header">
              <h3>Create a post</h3>
              <CloseIcon
                className="closeIcon"
                aria-label="close-modal"
                onClick={() => {
                  setCloseModal(!closeModal);
                }}
              />
            </div>
            <div className="separation"></div>

            <div className="modal__content">
              <div className="modal__user">
                <Avatar className="feed__pfp" src={user.url} />
                <p>{user.displayName}</p>
              </div>
              <div className="modal__input">
                <form>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="What do you want to talk about?"
                  />

                  {assetArea === "image" ? (
                    <UploadImage>
                      <input
                        type="file"
                        accept="image/gif, image/jpeg, image/png, image/jpg"
                        name="image"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                      <p className="uploadimage__text">
                        <label htmlFor="file">Select an image to upload</label>
                      </p>
                      {sharePic && (
                        <img
                          src={URL.createObjectURL(sharePic)}
                          className="uploadimage__submitted"
                          alt="sharedpicture"
                        />
                      )}
                    </UploadImage>
                  ) : (
                    assetArea === "media" && (
                      <>
                        <input
                          type="text"
                          placeholder="Share a video URL"
                          value={videoLink}
                          onChange={(e) => setVideoLink(e.target.value)}
                          className="sharedvideo__input"
                        />
                        {videoLink && (
                          <ReactPlayer
                            width={"100%"}
                            url={videoLink}
                            className="sharedvideo__link"
                          />
                        )}
                      </>
                    )
                  )}

                  <div className="modal__footer">
                    <div className="postbtn">
                      <button
                        type="submit"
                        onClick={submitPost}
                        disabled={!input ? true : false}
                      >
                        Post
                      </button>
                    </div>
                    <div className="uploadfile">
                      <div
                        className="picture"
                        onClick={() => switchAssetArea("image")}
                      >
                        <PhotoSizeSelectActualIcon />
                      </div>
                      <div
                        className="video"
                        onClick={() => switchAssetArea("media")}
                      >
                        <YouTubeIcon />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="modal__header">
                <PhotoSizeSelectActualIcon />
              </div> */}
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}

export default NewPostModal;
