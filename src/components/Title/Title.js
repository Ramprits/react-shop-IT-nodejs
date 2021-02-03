import React from "react";
import { Helmet } from "react-helmet";

const Title = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dhanai fruits | {props.title}</title>
    </Helmet>
  );
};

export default Title;
