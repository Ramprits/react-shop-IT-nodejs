import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: {
    flexWrap: "wrap"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  loginButton: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    marginLeft: "1rem"
  },
  linkBrandSmall: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block"
    }
  },
  tabs: {
    [theme.breakpoints.down("md")]: {
      order: 100,
      width: "100%",
      display: "none"
    }
  },
  tab: {
    minHeight: "64px",
    textTransform: "none",
    minWidth: "120px"
  },
  drawerContainer: {
    width: 256
  }
}));
