import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/Index";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/Product";
import RegisterPage from "./pages/Register";
import history from "./utils/history";

const routes = [
  {
    id: 1,
    url: "/",
    component: IndexPage,
  },
  {
    id: 2,
    url: "/home",
    component: IndexPage,
  },
  {
    id: 3,
    url: "/contact",
    component: ContactPage,
  },
  {
    id: 4,
    url: "/product",
    component: ProductPage,
  },
  {
    id: 5,
    url: "/login",
    component: LoginPage,
  },
  {
    id: 6,
    url: "/register",
    component: RegisterPage,
  },
];

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((r) => (
          <Route key={r.id} exact path={r.url} component={r.component}></Route>
        ))}
      </Switch>
    </Router>
  );
}
