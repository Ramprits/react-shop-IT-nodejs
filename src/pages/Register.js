import React from "react";
import Register from "../components/sign-up";
import Title from "../components/Title/Title";

export default function RegisterPage() {
  return (
    <React.Fragment>
      <Title title="Register" />
      <Register
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
