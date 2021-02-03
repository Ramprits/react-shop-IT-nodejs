import React from "react";
import Container from "@material-ui/core/Container";

export default function Structure(props) {
  const buckets = {
    1: Array.isArray(props.bucket) ? props.bucket : [],
  };

  return (
    <Container>
      {buckets["1"].map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
    </Container>
  );
}
