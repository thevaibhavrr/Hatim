import React from "react";
import "../../../styles/Contact/locate.css"
function Locate() {
  return (
    <div className="" >
      <div className="loacte_contant_div" >
        {/* ifream */}
        <div className="locate_ifrem_div" >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14570.433693225308!2d75.07279519999999!3d24.080090249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710159143994!5m2!1sen!2sin"
            // width="900"
            // height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="contact_us_google_ifream"
            title="conactus location"
          ></iframe>
        </div>
        {/* text */}
        <div className="locate_text" >LOCATE</div>
      </div>
    </div>
  );
}

export default Locate;
