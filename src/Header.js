import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputsearch, setInputsearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
            alt=""
          />{" "}
        </Link>
      </div>
      <div className="header__input">
        <input
          className="inputBrah"
          onChange={(e) => setInputsearch(e.target.value)}
          value={inputsearch}
          placeholder="Search"
          type="text"
        />

        <Link to={`/search/${inputsearch}`}>
          <SearchIcon className="header__inputbutton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
