import React from "react";
import Register from "../components/sign-up";
import Title from "../components/Title/Title";

export default function RegisterPage() {
  return (
    <React.Fragment>
      <Title title="Register" />
      <Register content={null} />
    </React.Fragment>
  );
}
