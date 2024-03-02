import React from "react";
import "../../../styles/Home/Product/why_Hamis.css";

function WhyHamis() {
  return (
    <div className="" >
      {/* heading */}
      <div className="main_heading">Why Hamis?</div>
      {/* details */}
      <div className="why_hamis_details_div"  >
        {/* 1 */}
        <div className="why_hamis_details"  >
          <div className="why_hamis_details_num" >1990</div>
          <div className="why_hamis_details_texts">Since</div>
        </div>
        {/* 2 */}
        <div className="why_hamis_details"  >
          <div className="why_hamis_details_num" >100+</div>
          <div className="why_hamis_details_texts">Dealers</div>
        </div>
        {/* 3 */}
        <div className="why_hamis_details"  >
          <div className="why_hamis_details_num" >10+</div>
          <div className="why_hamis_details_texts">Serving Countries</div>
        </div>
      </div>
    </div>
  );
}

export default WhyHamis;
