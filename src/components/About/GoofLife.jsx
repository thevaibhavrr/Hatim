import React from "react";
import "../../styles/About/GoofLife.css";

function GoofLife() {
  return (
    <>
      <div className="main_good_life">
        <div className="good_life_conant_div">
          {/* top */}
          <div className="good_life_text"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
          >
            <div>FOR A GOOD LIFE, HAVE A </div>
            <div className="good_life_second_div">
              <div>GOOD BITE</div>
              <div className="good_life_input_div" >
                <div>
                  <input type="text"  className="good_life_input" />
                </div>
                <div className="good_life_subscribe_div">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoofLife;
