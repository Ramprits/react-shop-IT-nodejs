import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme/theme";
import { Store, persistor } from "./redux/store";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  rootElement
);
