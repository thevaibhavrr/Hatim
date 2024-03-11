import React from "react";
import "../../../styles/Contact/ContactUsForm.css";
function ContactUsForm() {
  return (
    <div>
      <div className="ContactUsForm_main_contant">
        {/* text */}
        <div className="CONNECT_text">CONNECT</div>
        {/* form */}
        <div className="connect_form_div">
          <div className="connect_form_second_div" >
            {/* top */}
            <div className="ContactUsForm_right_side_top_heading">
              Got Questions? We've Got Answers!
            </div>
            {/* bottom */}
            <div className="ContactUsForm_right_side_bottom">
              {/* input */}
              <div className="ContactUsForm_right_side_bottom_input_div_parent">
                {/* full name */}
                <div>
                  <input
                    type="text"
                    name="Name"
                    className="contact_us_form_input_filed"
                    placeholder="Full Name"
                  />
                </div>
                {/* email */}
                <div>
                  <input
                    type="text"
                    name="email"
                    className="contact_us_form_input_filed"
                    placeholder="Email Address"
                  />
                </div>
                {/* Phone */}
                <div>
                  <input
                    type="text"
                    name="number"
                    className="contact_us_form_input_filed"
                    placeholder="Phone Number"
                  />
                </div>
                {/* Message */}
                <div>
                  <textarea
                    type="text"
                    name="Message"
                    className="contact_us_form_input_filed"
                    placeholder="Message"
                  />
                </div>
                <div className="contact_us_form_submit_button_div" >
                  <button className="contact_us_form_submit_button" >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
