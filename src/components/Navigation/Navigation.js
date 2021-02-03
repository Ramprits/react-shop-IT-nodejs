import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import useStyles from "./styles";

const routerName = {
  0: "home",
  1: "product",
  2: "contact",
};

const HorizontalNav = (props) => {
  const classes = useStyles();
  const [state, setState] = useState(0);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.history.push(`/${routerName[newValue]}`);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };
  useEffect(() => {
    if (window.location.pathname === "/home" && value !== 0) {
      setValue(0);
    }
    if (window.location.pathname === "/product" && value !== 1) {
      setValue(1);
    }

    if (window.location.pathname === "/contact" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Link
          onClick={() => props.history.push("/")}
          variant="h5"
          color="inherit"
          underline="none"
          className={classes.linkBrand}
        >
          <img
            src="mui-assets/img/logo-pied-piper-white.png"
            alt=""
            width="120"
          />
        </Link>
        <Link
          onClick={() => props.history.push("/")}
          variant="h5"
          color="inherit"
          underline="none"
          className={classes.linkBrandSmall}
        >
          <img
            src="mui-assets/img/logo-pied-piper-white-icon.png"
            alt=""
            width="32"
          />
        </Link>
        <Tabs
          value={value}
          className={classes.tabs}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Home"
            color="inherit"
            underline="none"
            className={classes.tab}
          />
          <Tab
            label="Product"
            color="inherit"
            underline="none"
            className={classes.tab}
          />

          <Tab
            label="Contact"
            color="inherit"
            underline="none"
            className={classes.tab}
          />
        </Tabs>
        <Button
          color="default"
          variant="contained"
          className={classes.loginButton}
        >
          Login
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="Features">
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Features" />
            </ListItem>
            <ListItem button key="Enterprise">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Enterprise" />
            </ListItem>
            <ListItem button key="Support">
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItem>
            <ListItem button key="ICO">
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="ICO" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};
export default withRouter(HorizontalNav);
