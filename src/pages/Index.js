import React from "react";

import StructureContainer from "../components/__structures/StructureContainer";
import Footer from "../components/Footer";
import HorizontalNav from "../components/Navigation";
import Home from "../components/Home";

export default function Index() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <StructureContainer bucket={[<Home content={null} />]} />

      <Footer
        content={{
          copy: "\u00a9 2021 Dhanai Fruits. All rights reserved.",
        }}
      />
    </React.Fragment>
  );
}
