import React, { useState } from "react";
import axios from "axios";
import "../../../styles/Contact/ContactUsForm.css";
function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    PhoneNumber: "",
    message: "",
  });

  const handelCahnge = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("https://hamis-backend.onrender.com/send-email", formData)
        .then((res) => {
          console.log(res.data);
          setFormData({
            name: "",
            email: "",
            PhoneNumber: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="ContactUsForm_main_contant">
        {/* text */}
        <div className="CONNECT_text">CONNECT</div>
        {/* form */}
        <div className="connect_form_div">
          <div className="connect_form_second_div">
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
                    name="name"
                    value={formData.name}
                    onChange={handelCahnge}
                    className="contact_us_form_input_filed"
                    placeholder="Full Name"
                    required
                  />
                </div>
                {/* email */}
                <div>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handelCahnge}
                    className="contact_us_form_input_filed"
                    placeholder="Email Address"
                    required
                  />
                </div>
                {/* Phone */}
                <div>
                  <input
                    type="text"
                    value={formData.PhoneNumber}
                    onChange={handelCahnge}
                    name="PhoneNumber"
                    className="contact_us_form_input_filed"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                {/* Message */}
                <div>
                  <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handelCahnge}
                    className="contact_us_form_input_filed"
                    placeholder="Message"
                    required
                  />
                </div>
                <div className="contact_us_form_submit_button_div">
                  <button
                    className="contact_us_form_submit_button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
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
