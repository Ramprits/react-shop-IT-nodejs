import React from "react";

import StructureContainer from "../components/__structures/StructureContainer";
import HorizontalNav from "../components/Navigation";
import Footer from "../components/Footer";
import Product from "../components/Product";

export default function ProductPage() {
  return (
    <React.Fragment>
      <HorizontalNav />

      <StructureContainer bucket={[<Product />]} />

      <Footer
        content={{
          copy: "\u00a9 2021 Dhanai Fruits. All rights reserved.",
        }}
      />
    </React.Fragment>
  );
}
