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
import { useDispatch, useSelector } from "react-redux";
import { userLogut } from "../../redux/user/user.actions";
import { Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const routerName = {
  0: "home",
  1: "product",
  2: "contact"
};

const HorizontalNav = (props) => {
  const classes = useStyles();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [state, setState] = useState(0);

  const [value, setValue] = React.useState(0);

  const Profile = (event, newValue) => {
    setValue(newValue);
    props.history.push(`/${routerName[newValue]}`);
  };

  const toggleDrawer = () => (event) => {
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

  const handleSignout = () => {
    dispatch(userLogut());
    props.history.push("/login");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          onChange={Profile}
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
        {userInfo?.token ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleSignout}>Signout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            color="default"
            variant="contained"
            onClick={() => props.history.push("/login")}
            className={classes.loginButton}
          >
            Login
          </Button>
        )}
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
