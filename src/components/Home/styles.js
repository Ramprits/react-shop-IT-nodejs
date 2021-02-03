import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  secondaryAction: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  contentBox: {
    maxWidth: theme.breakpoints.values["md"],
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      textAlign: "left",
    },
  },
  videoBoxRoot: {
    maxWidth: 512,
    paddingBottom: theme.spacing(12),
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(12),
    },
  },
  cardRoot: {
    position: "relative",
    paddingTop: "56.25%",
    margin: "auto",
    overflow: "hidden",
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
}));