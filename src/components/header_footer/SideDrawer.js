import React from "react";
import { scroller } from "react-scroll";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem
          button
          onClick={() => {
            scrollToElement("featured");
          }}
          style={{ padding: "20px" }}
        >
          Event Start In...
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("venueInfo");
          }}
          style={{ padding: "20px" }}
        >
          Venue Info
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("highlights");
          }}
          style={{ padding: "20px" }}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("pricing");
          }}
          style={{ padding: "20px" }}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("location");
          }}
          style={{ padding: "20px" }}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
