import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="header-logo" className="header-logo" />
      <h1 className="header-text">My Travel Journal</h1>
    </div>
  );
}

export default Header;
