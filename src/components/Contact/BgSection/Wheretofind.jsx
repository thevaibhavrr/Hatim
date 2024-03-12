import React from "react";
import "../../../styles/Contact/Wheretofind.css";
function Wheretofind() {
  return (
    <div className="main_where_find" >
      {/* contant */}
      <div className="main_where_find_contant" >
        {/* top */}
        <div
         data-aos="zoom-in"
         data-aos-offset="200"
         data-aos-delay="500"
         data-aos-duration="1000"
        >
          {/* hading */}
          <div className="where_find_red_heading"
           >Where to Find Us</div>
          {/* address */}
          <div>
            {/* 1 */}
            <div className="where_find_list_main_div" >
              <div> Funjoy Food Products (Pvt) Ltd.</div>
              <div> Naudharani Road to Madevi Road,</div>
              <div> Malerkotla, Punjab - 148023 </div>
            </div>
          </div>
        </div>
        {/* bttom */}
        <div
         data-aos="zoom-in"
         data-aos-offset="200"
         data-aos-delay="500"
         data-aos-duration="1000"
        >
          {/* hading */}
          <div className="where_find_red_heading" >Connect Us Via:</div>
          {/* address */}
          <div>
            {/* 1 */}
            <div className="where_find_list_main_div" >
              <div> hamisfoods6@gmail.com</div>
              <div> +91-9654524000</div>
              <div>+91-8847328492 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheretofind;
