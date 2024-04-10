import React from "react";
import "../../styles/Home/OurStory.css";
import { Link } from "react-router-dom";
function OurStory() {
  return (
    <>
      <div className="main_Our_story_div">
        <div className="main_Our_story_div_text">
          <div
            className="main_Our_story_div_hading"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            Our Story
          </div>
          <div
            className="main_Our_story_div_message"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            Hamis Biscuits was founded in the years 1990. we firmly stand to
            provide uncompromised taste and quality. we have introduced
            different ranges of biscuits but what remains constant and intact is
            our premium quality. All our manufacturing facilities are fully
            automated and equipped with the latest plant and machinery that
            facilitate in manufacturing uniform quality products. our company
            has been satisfying customers with our exemplary service and
            superior range of products. Our R&D team is passionate about
            developing innovative products that reflect evolving consumer
            preferences. We believe that innovation is key to our success
          </div>
          <Link to={"/about"} className="css-for-link-tag" >
          <div className="know_more_button">Know more</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OurStory;
