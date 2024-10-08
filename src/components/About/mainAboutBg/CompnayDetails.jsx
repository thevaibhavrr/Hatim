import React from "react";
import "../../../styles/About/CompnayDetails.css";
import VerifirdImage from "../../../Images/About/Approval.png";
import BestSallerImage from "../../../Images/About/Best Seller.png";
import CookieImage from "../../../Images/About/Cookie.png";
import GiftImage from "../../../Images/About/Wedding Gift.png";
import LineImage from "../../../Images/About/Line 5.png";
import {motion} from 'framer-motion'
// import LocomotiveScroll from 'locomotive-scroll';


function CompanyDetails() {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="company_details_top_main_div" >
        {/* heading */}
        <div>
          <div className="founder_name_div" >MR. VARINDER SINGH.</div>
          <div>FOUNDER</div>
        </div>

        {/* company details section */}
        <div className="main_company_details_div">
          {/* images */}
          <div className="main_company_details_Image_section">
            {/* veified image  */}
            <div 
             data-aos="flip-left"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1000"
            >
              <img
                src={VerifirdImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            <div 
             data-aos="flip-up"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1500"
            >
              <img
                src={LineImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            {/* best Saller image  */}
            <div 
             data-aos="flip-left"
             data-aos-offset="200"
             data-aos-delay="0"
             data-aos-duration="1000"
            >
              <motion.img
                src={BestSallerImage}
                alt="Logos"
                className="company_details_images"
                initial={{ scale: 0, opacity: 0, y: -300 }}
                whileInView={{ scale: 1, opacity: 1, y: 0, }}
                transition={{ duration: 1, delay: 1.3 }}
        viewport={{ once: true }}

              />
            </div>
            <div 
             data-aos="flip-up"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1500"
            >
              <img
                src={LineImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            {/* cookies image  */}
            <div
             data-aos="flip-left"
             data-aos-offset="200"
             data-aos-delay="0"
             data-aos-duration="1000"
            >
              <motion.img
                src={CookieImage}
                alt="Logos"
                className="company_details_images"
                initial={{ scale: 0, opacity: 0, y: -400 }}
                whileInView={{ scale: 1, opacity: 1, y: 0, }}
                transition={{ duration: 1, delay: 1.3 }}
        viewport={{ once: true }}

              />
            </div>
            <div
             data-aos="flip-up"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1500"
            >
              <img
                src={LineImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            {/* Gift image  */}
            <div
             data-aos="flip-left"
             data-aos-offset="200"
             data-aos-delay="0"
             data-aos-duration="1000"
            >
              <motion.img
                src={GiftImage}
                alt="Logos"
                className="company_details_images"
                initial={{ scale: 0, opacity: 0, y: -400 }}
                whileInView={{ scale: 1, opacity: 1, y: 0, }}
                transition={{ duration: 1, delay: 1.3 }}
        viewport={{ once: true }}

              />
            </div>
          </div>
          {/* text */}
          <div className="main_company_details_text_section">
            {/* 1 */}
            <div className="main_company_details_text_div"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              {/* heading */}
              <div>Certified</div>
              {/* details */}
              <div>Hamis (Pvt) Ltd is ISO 22000-2005 Certification.</div>
            </div>
            {/* 2 */}
            <div className="main_company_details_text_div"
             data-aos="zoom-in"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1000"
            >
              {/* heading */}
              <div>High quality</div>
              {/* details */}
              <div>We provides tantalizing and wholesome Biscuits.</div>
            </div>
            {/* 1 */}
            <div className="main_company_details_text_div"
             data-aos="zoom-in"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1000"
            >
              {/* heading */}
              <div>CLIENT SATISFACTION</div>
              {/* details */}
              <div>We strive to provide maximum client satisfaction.</div>
            </div>
            {/* 1 */}
            <div className="main_company_details_text_div"
             data-aos="zoom-in"
             data-aos-offset="200"
             data-aos-delay="800"
             data-aos-duration="1000"
            >
              {/* heading */}
              <div>QUALITY PRODUCTS</div>
              {/* details */}
              <div> Our customer centric approach and quality products.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;
