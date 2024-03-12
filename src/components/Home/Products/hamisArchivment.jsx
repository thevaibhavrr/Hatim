import React from "react";
import "../../../styles/Home/Product/hamisArchivment.css";
import Archivmen1 from "../../../Images/Home/archvment1.png";
import Archivmen2 from "../../../Images/Home/archivment2.png";
import { motion } from "framer-motion";

function HamisArchivment() {
  return (
    <div className=" main_hamis_archvment_div">
      {/* first */}
      <div className="hamis_archvment_div">
        {/* left */}
        <div>
          {/* <img src={Archivmen1} alt="archivment"className="hamis_archivment_images" /> */}
          <motion.img
            src={Archivmen1}
            alt="archivment"
            className="hamis_archivment_images"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.7 }}
          />
        </div>
        {/* right */}
        <div
          className="hamis_archivment_text_section"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          Hamis: ISO-certified excellence in every bite. Unmatched quality,
          guaranteed.
        </div>
      </div>
      {/* second */}
      <div className="hamis_archvment_div">
        {/* left */}
        <div
          className="text-end hamis_archivment_text_section"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          Crafted from the finest ingredients for an unparalleled taste
          experience.
        </div>
        {/* right */}
        <div>
          {/* <img src={Archivmen2} alt="archivment" className="hamis_archivment_images"/> */}
          <motion.img
            src={Archivmen2}
            alt="archivment"
            className="hamis_archivment_images"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.7 }}
          />
        </div>
      </div>
    </div>
  );
}

export default HamisArchivment;
