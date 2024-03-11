import React from "react";
import bannerImage from "../../Images/ContactUs/Contact_us_banner.png";
import "../../styles/Contact/ContactBanner.css";
function ContactBanner() {
  return (
    <div className="main_contact_us_page_banner">
      <div>
        <img src={bannerImage} alt="" className="main_contgact_us_image" />
      </div>
      <div className="ContactUs_Text" >Contact Us</div>
    </div>
  );
}

export default ContactBanner;
