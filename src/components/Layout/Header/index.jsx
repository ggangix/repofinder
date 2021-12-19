import React from "react";
import "./style.scss";
import logo from "../../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
