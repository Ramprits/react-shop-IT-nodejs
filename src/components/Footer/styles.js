import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  iconsBoxRoot: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },
  copy: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      order: 12,
    },
  },
}));
