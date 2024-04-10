// import React from "react";
// import { motion } from "framer-motion";
// import "../../styles/Home/Banner.css";
// import Banner_Image from "../../Images/Home/Hamis_Cover1 1.png";

// function Banner() {
//   return (
//     <div className="main_banner_div">
//       <motion.img
//         src={Banner_Image}
//         alt="banner"
//         className="home_page_banner_image"
//         initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
//         animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
//         transition={{ duration: 2 }} // Animation duration
//       />
//     </div>
//   );
// }

// export default Banner;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "../../styles/Home/Banner.css";
// import BannerImage from "../../Images/Home/Hamis_Cover1 1.png";
// import BannerSecondImage from "../../Images/Home/secondBanner.png";

// function Banner() {
//   const [currentImage, setCurrentImage] = useState(BannerImage);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) =>
//         prevImage === BannerImage ? BannerSecondImage : BannerImage
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="main_banner_div">
//       <motion.img
//         src={currentImage}
//         alt="banner"
//         className="home_page_banner_image"
//         initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
//         animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
//         transition={{ duration: 2 }} // Animation duration
//       />
//     </div>
//   );
// }

// export default Banner;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../../styles/Home/Banner.css";
// import Banner_Image from "../../Images/Home/Hamis_Cover1 1.png";
// import BannerSecondImage from "../../Images/Home/secondBanner.png";
// function Banner() {
//   const [isFirstImage, setIsFirstImage] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFirstImage((prev) => !prev);
//     }, 6000); // Switch images every 6 seconds (3 seconds for each)
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="main_banner_div">
//       <AnimatePresence>
//         {isFirstImage ? (
//           <motion.img
//             key="firstImage"
//             src={Banner_Image}
//             alt="banner"
//             className="home_page_banner_image"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ duration: 2 }}
//           />
//         ) : (
//           <motion.img
//             key="secondImage"
//             src={BannerSecondImage}
//             alt="banner"
//             className="home_page_banner_image"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ duration: 2 }}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import "../../styles/Home/Banner.css";
import BannerImage from "../../Images/Home/Hamis_Cover1 1.png";
// import BannerSecondImage from "../../Images/Home/your_banner_second_image.png";
import BannerSecondImage from "../../Images/Home/secondBanner.png";


function Banner() {
  return (
    <div className="main_banner_div">
      <Carousel>
        <Carousel.Item>
          <motion.img
            src={BannerImage}
            alt="First slide"
            className="home_page_banner_image"
            initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
            animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
            transition={{ duration: 2 }} // Animation duration
          />
        </Carousel.Item>
        <Carousel.Item>
          <motion.img
            src={BannerSecondImage}
            alt="Second slide"
            className="home_page_banner_image"
            initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
            animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
            transition={{ duration: 2 }} // Animation duration
          />
        </Carousel.Item>
        <Carousel.Item>
          <motion.img
            src={BannerImage}
            alt="Third slide"
            className="home_page_banner_image"
            initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
            animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
            transition={{ duration: 2 }} // Animation duration
          />
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </div>
  );
}

export default Banner;
