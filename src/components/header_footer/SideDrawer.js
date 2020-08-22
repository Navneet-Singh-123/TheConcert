import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
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
            console.log("Featured");
          }}
          style={{ padding: "20px" }}
        >
          Event Start In...
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log("Venue");
          }}
          style={{ padding: "20px" }}
        >
          Venue Info
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log("Highlights");
          }}
          style={{ padding: "20px" }}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log("Pricing");
          }}
          style={{ padding: "20px" }}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log("Location");
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
