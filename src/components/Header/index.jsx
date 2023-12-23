import React from "react";
import "./styles.css";
import Logo from "./../../assets/img/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
