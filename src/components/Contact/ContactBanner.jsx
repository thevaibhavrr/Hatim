import React from "react";
import bannerImage from "../../Images/ContactUs/Contact Us banner.jpg";
import "../../styles/Contact/ContactBanner.css";
function ContactBanner() {
  return (
    <div className="main_contact_us_page_banner"
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="500"
    data-aos-duration="1000"
    >
      <div>
        <img src={bannerImage} alt="" className="main_contgact_us_image" />
      </div>
      <div className="ContactUs_Text"
     
      >Contact Us</div>
    </div>
  );
}

export default ContactBanner;
