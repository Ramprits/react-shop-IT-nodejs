import React from "react";

import StructureContainer from "../components/__structures/StructureContainer";
import HorizontalNav from "../components/Navigation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <StructureContainer bucket={[<Contact />]} />

      <Footer
        content={{
          copy: "\u00a9 2021 Dhanai Fruits. All rights reserved.",
        }}
      />
    </React.Fragment>
  );
}
