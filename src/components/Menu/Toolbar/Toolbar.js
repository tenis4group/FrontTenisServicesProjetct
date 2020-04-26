import React from "react";
import { NavLink } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import MenuItem from "../MenuItem";
import "../../../styles/Toolbar.css";

import Logo from "../../../images/Logo.png";
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-item">
          <MenuItem />
        </div>
      </nav>
      <div className="baner"></div>
    </header>
  );
};

export default Toolbar;
