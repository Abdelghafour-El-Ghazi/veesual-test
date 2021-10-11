import React from "react";
import logo from "../../images/logov.webp";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className='appbar'>
      <img src={logo} alt='appbar'></img>
      <div>Veesual Spotify</div>
    </div>
  );
};

export default AppBar;
