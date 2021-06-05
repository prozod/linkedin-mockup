import React, { useState } from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../components/Firebase";
import { logout, selectUser } from "../features/userSlice";
import LinkedInBug from "../icons/linkedin-icon.svg";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { useTransition, animated, config } from "react-spring";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    auth.signOut();
  };

  const transitions = useTransition(openMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },

    config: config.molasses,
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

        <div className="header__mobile">
          <MenuOutlinedIcon
            className="mobileHamburger"
            onClick={() => setOpenMenu(!openMenu)}
          />

          {openMenu && (
            <MobileMenu>
              <div className="header__mobile-menu">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={TextsmsIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
              </div>
            </MobileMenu>
          )}
        </div>

        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messaging" Icon={TextsmsIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />
          <HeaderOption
            profilepicture={true}
            title="Me"
            onClick={logoutUser}
            className="userprofile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
