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
            // src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14570.433693225308!2d75.07279519999999!3d24.080090249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710159143994!5m2!1sen!2sin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.032297526976!2d75.86645827350142!3d30.516044592367614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391067a4c61a098d%3A0x749b4798c934a610!2sFunjoy%20Food%20Products%20(Pvt)%20Ltd.!5e0!3m2!1sen!2sin!4v1710233290116!5m2!1sen!2sin"
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
