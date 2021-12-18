import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header" onClick={() => navigate(`/`)}>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
