import React from 'react'
import "../../styles/About/imagesectionAbout.css"
import { motion } from "framer-motion";
import Banner_Image from "../../Images/About/about_banner.png";

function ImagesectionAbout() {
  return (
    <div>
        <div className="main_banner_div">
      <motion.img
        src={Banner_Image}
        alt="banner"
        className="home_page_banner_image_for_about"
        initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
        animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
        transition={{ duration: 2 }} // Animation duration
      />
    </div>
    </div>
  )
}

export default ImagesectionAbout