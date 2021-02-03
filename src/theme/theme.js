import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily:
      '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  palette: {
    primary: {
      main: "#3f51b5",
    },
  },
});

export default theme;
