import React from "react";
import "../../../styles/Home/Product/hamisArchivment.css";
import Archivmen1 from "../../../Images/Home/archvment1.png";
import Archivmen2 from "../../../Images/Home/archivment2.png";
function HamisArchivment() {
  return (
    <div className=" main_hamis_archvment_div">
      {/* first */}
      <div className="hamis_archvment_div" >
        {/* left */}
        <div >
          <img src={Archivmen1} alt="archivment"className="hamis_archivment_images" />
        </div>
        {/* right */}
        <div className="hamis_archivment_text_section" >
          Hamis: ISO-certified excellence in every bite. Unmatched quality,
          guaranteed.
        </div>
      </div>
      {/* second */}
      <div className="hamis_archvment_div" >
        {/* left */}
        <div className="text-end hamis_archivment_text_section" >
          Crafted from the finest ingredients for an unparalleled taste
          experience.
        </div>
        {/* right */}
        <div>
          <img src={Archivmen2} alt="archivment" className="hamis_archivment_images"/>
        </div>
      </div>
    </div>
  );
}

export default HamisArchivment;
