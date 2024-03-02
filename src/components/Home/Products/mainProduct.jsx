import React from "react";
import HamisArchivment from "./hamisArchivment";
import Hamisproducts from "./hamisproducts";
import WhyHamis from "./whyHatim";
import "../../../styles/Home/Product/main_product.css";
function MainProduct() {
  return (
      <div className="main_padding main_product_div_for_bg">
        <HamisArchivment />
        <Hamisproducts />
        <WhyHamis />
      </div>
  );
}

export default MainProduct;
