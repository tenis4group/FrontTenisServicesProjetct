import React, { Component } from "react";

import Toolbar from "../components/Menu/Toolbar/Toolbar";
import SideDrawer from "../components/Menu/SideDrawer/SideDrawer";
import Backdrop from "../components/Menu/Backdrop/Backdrop";

class Header extends Component {
  state = { sideDrawerOpen: false };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHanlder = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHanlder} />;
    }

    return (
      <div className="header">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default Header;
