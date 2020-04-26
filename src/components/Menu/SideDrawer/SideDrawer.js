import React from "react";

import "../../../styles/SideDrawer.css";
import MenuItem from "../MenuItem";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <MenuItem />
      </ul>
    </nav>
  );
};

export default sideDrawer;
