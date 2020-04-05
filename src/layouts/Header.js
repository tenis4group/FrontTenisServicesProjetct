import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header__menu">
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
