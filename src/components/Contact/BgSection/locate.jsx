import React from "react";
import "../../../styles/Contact/locate.css"
function Locate() {
  return (
    <div className="" >
      <div className="loacte_contant_div" >
        {/* ifream */}
        <div className="locate_ifrem_div"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3437.6223987799744!2d75.86281207557147!3d30.50343507469574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMwJzEyLjQiTiA3NcKwNTEnNTUuNCJF!5e0!3m2!1sen!2sin!4v1713251061158!5m2!1sen!2sin"
            // width="900"
            // height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="contact_us_google_ifream"
            title="conactus location"
          />
        </div>
        {/* text */}
        <div className="locate_text"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
        >LOCATE</div>
      </div>
    </div>
  );
}

export default Locate;
