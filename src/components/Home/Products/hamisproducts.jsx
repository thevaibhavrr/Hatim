import "../../../styles/Home/Product/hamisproducts.css";
import React from "react";
import Bisk1 from "../../../Images/Home/bisk1.png";
import Bisk2 from "../../../Images/Home/bisk2.png";
import Bisk3 from "../../../Images/Home/bisk3.png";
import Bisk4 from "../../../Images/Home/bisk4.png";
function Hamisproducts() {
  return (
    <>
      <div className=" main_hamis_product_div">
        {/* heading */}
        <div>
          <div
            className="main_heading main_product_text"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            Product
          </div>
        </div>
        {/* products */}
        <div
          className="main_product_image"
          // data-aos="zoom-in"
          // data-aos-offset="200"
          // data-aos-delay="1000"
          // data-aos-duration="1000"
        >
          <div className="bisk_product_div">
            {/* 1 */}
            <div className="bisk_product_divs bisk_product_top_left  ">
              <img src={Bisk1} alt="bisk" className="img-fluid bisk_images animate__animated animate__zoomIn" />
            </div>
            {/* 2 */}
            <div className="bisk_product_divs bisk_product_top_right ">
              <img src={Bisk2} alt="bisk" className="img-fluid bisk_images animate__animated animate__zoomIn" />
            </div>
          </div>
          <div className="bisk_product_div">
            {/* 3 */}
            <div className="bisk_product_divs bisk_product_bottom_left ">
              <img src={Bisk3} alt="bisk" className="img-fluid bisk_images animate__animated animate__zoomIn" />
            </div>
            {/* 4 */}
            <div className="bisk_product_divs bisk_product_bottom_right ">
              <img src={Bisk4} alt="bisk" className="img-fluid bisk_images animate__animated animate__zoomIn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamisproducts;
