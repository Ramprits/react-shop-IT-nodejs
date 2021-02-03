import React from "react";

import Login from "../components/sign-in";
import Title from "../components/Title/Title";

export default function LoginPage() {
  return (
    <React.Fragment>
      <Title title="Login" />
      <Login
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "mui-assets/img/logo-pied-piper.png",
            width: "200",
            height: "50",
          },
        }}
      />
    </React.Fragment>
  );
}
