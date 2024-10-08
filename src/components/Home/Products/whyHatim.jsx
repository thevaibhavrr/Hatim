import React, { useState } from "react";
import "../../../styles/Home/Product/why_Hamis.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function WhyHamis() {
  const [CountOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCountOn(true) } onExit={()=>setCountOn(false)} >
    <div className="">
      {/* heading */}
      <div
        className="main_heading Why_Hamis_text" 
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        Why Hamis?
      </div>
      {/* details */}
      <div
        className="why_hamis_details_div"
        // data-aos="zoom-in"
        // data-aos-offset="200"
        // data-aos-delay="800"
        // data-aos-duration="1000"
      >
        {/* 1 */}
        <div className="why_hamis_details">
          <div className="why_hamis_details_num">1990</div>
          <div className="why_hamis_details_texts">Since</div>
        </div>
        {/* 2 */}
        <div className="why_hamis_details">
          <div className="why_hamis_details_num"> {CountOn && <CountUp  start={0} end={100} duration={5} /> }+ </div>
          <div className="why_hamis_details_texts">Dealers</div>
        </div>
        {/* 3 */}
        <div className="why_hamis_details">
          <div className="why_hamis_details_num"> {CountOn &&  <CountUp start={0} end={10} duration={6} />} +</div>
          <div className="why_hamis_details_texts">Serving Countries</div>
        </div>
      </div>
    </div>
    </ScrollTrigger>
  );
}

export default WhyHamis;
