import React from "react";
import "./NavBar.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

export default function NavBar() {
  return (
    <>
      <div className="NavbarContainer">
        <div className="left">
          <button id="sidebarToggle">
            <ReorderIcon id="icon" />
          </button>
          <PlayCircleOutlineIcon id="icon" style={{ color: "darkblue" }} />
          <h1>StreamIt</h1>
        </div>
        <div className="center">
          <input id="searchBar" type="text" placeholder="Search" />
          <button id="searchButton">
            <SearchIcon />
          </button>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}
