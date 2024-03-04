import React from "react";
import "../../../styles/About/WhoWeAre.css";

function WhoWeAre() {
  return (
    <>
      <div>
        {/* heading */}
        <div className="main_heading text-start who_we_are_text">
          Who We Are
        </div>
        {/* message */}
        <div className="who_we_are_main_message">
          Funjoy Food Products (Pvt) Ltd., was founded in the years 1990. As of
          today, it is owned by Mr. Kulwant Singh. It is his 24 Years and
          profound knowledge has led us towards success. Based in Malerkotla
          (Punjab), our company provides its products all over India and abroad.
        </div>
        {/* quality divs */}
        <div className="who_div_are_quality_div_main" >
          {/* 1 */}
          <div className="who_div_are_quality_div" >
            {/* heading */}
            <div className="who_div_are_quality_heading" >Quality at Hamis</div>
            {/* message */}
            <div className="who_div_are_quality_message" >
              We're a quality-focused company, proudly holding certifications
              such as ISO 22000-2005, HACCP, Jassanz, and more.
            </div>
          </div>
          {/* 2 */}
          <div className="who_div_are_quality_div">
            {/* heading */}
            <div className="who_div_are_quality_heading">Aim of Hamis Biscuit</div>
            {/* message */}
            <div className="who_div_are_quality_message" >
              We aspire to dominate the global biscuit market through dedication
              and commitment, partnering closely with our customers for mutual
              success.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
