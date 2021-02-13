import React, { useState } from "react";
import "./NavBar.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function NavBar() {
  const [loggedIn, SetLogIn] = useState(false);

  return (
    <>
      <div className="NavbarContainer">
        <div className="left">
          <button id="sidebarToggle">
            <ReorderIcon id="icon" />
          </button>
          <PlayCircleOutlineIcon id="icon" />
          <h1>StreamIt</h1>
        </div>
        <div className="center">
          <input id="searchBar" type="text" placeholder="Search" />
          <button id="searchButton">
            <SearchIcon />
          </button>
        </div>
        <div className="right">
          <button id="createVideo">
            <AddBoxIcon id="icon" />
          </button>

          {loggedIn ? (
            <button id="profilePic"></button>
          ) : (
            <button id="SignInButton">SignIn</button>
          )}
        </div>
      </div>
    </>
  );
}
