import React, { Component } from "react";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

import SideDrawer from "./SideDrawer";

class Header extends Component {
  // Initial state
  state = {
    drawerOpen: false,
    headerShow: false,
  };

  // When the component mounts
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Functions
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value,
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px",
          transition: "0.30s",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Concert</div>
            <div className="header_logo_title">Musical Events</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => {
              this.toggleDrawer(value);
            }}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
