// import React from 'react'
// import "../../styles/Home/Banner.css"
// import Banner_Image from "../../Images/Home/Hamis_Cover1 1.png"
// function Banner() {
//   return (
//     <>
//     <div className='main_banner_div' >
//         <img src={Banner_Image} alt="banner" className='home_page_banner_image' />
//     </div>
//     </>
//   )
// }

// export default Banner
import React from "react";
import { motion } from "framer-motion";
import "../../styles/Home/Banner.css";
import Banner_Image from "../../Images/Home/Hamis_Cover1 1.png";

function Banner() {
  return (
    <div className="main_banner_div">
      <motion.img
        src={Banner_Image}
        alt="banner"
        className="home_page_banner_image"
        initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
        animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
        transition={{ duration: 2 }} // Animation duration
      />
    </div>
  );
}

export default Banner;
