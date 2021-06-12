import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "../components/Firebase";
import { logout } from "../features/userSlice";
import LinkedInBug from "../icons/linkedin-icon.svg";
import { useTransition, animated } from "react-spring";

let useClickOutside = (handler) => {
  let domRef = useRef();

  useEffect(() => {
    let clickHandler = (event) => {
      if (!domRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });

  return domRef;
};

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [userLogout, setUserLogout] = useState(false);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    auth.signOut();
  };

  const transitions = useTransition(openMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function MobileMenu(props) {
    return (
      <nav>
        {transitions(
          (styles, item) =>
            item && <animated.div style={styles}>{props.children}</animated.div>
        )}
      </nav>
    );
  }

  let logoutRef = useClickOutside(() => {
    setUserLogout(false);
  });
  let searchRef = useClickOutside(() => {
    setOpenMenu(false);
  });

  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left">
          <img src={LinkedInBug} alt="LinkedIn Logo" />

          <div className="header__search">
            <SearchIcon className="header__searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div ref={searchRef} className="header__mobile ">
          <SearchIcon
            className="mobileHamburger"
            onClick={() => setOpenMenu(!openMenu)}
          />

          {openMenu && (
            <MobileMenu>
              <input
                type="text"
                placeholder="Search"
                className="search__mobile"
              />
            </MobileMenu>
          )}
        </div>
        {/* logoutUser */}
        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messaging" Icon={TextsmsIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />

          <div ref={logoutRef} className="signout__menu">
            <HeaderOption
              profilepicture={true}
              title="Me"
              onClick={() => setUserLogout(!userLogout)}
              className="userprofile"
            ></HeaderOption>
            {userLogout && (
              <div className="signout">
                <h5 onClick={logoutUser}>Log Out</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
