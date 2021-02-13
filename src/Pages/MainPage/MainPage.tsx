import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="center">
        <SideBar />
        <div className="VideoView"></div>
      </div>
    </div>
  );
}
