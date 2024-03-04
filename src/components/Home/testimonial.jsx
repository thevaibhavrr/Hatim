import React, { useEffect, useState } from "react";
import "../../styles/Home/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DesingImage from "../../Images/Home/testmonialbottomdesiing.png";
import MessageFirstImage from "../../Images/Home/testimonial1.png";
import MessageSecondImage from "../../Images/Home/testimonail2.png";

function Testimonial() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(2.7);

  const handleSlideChange = () => {
    if (swiperRef) {
      setActiveIndex(swiperRef.activeIndex);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 500) {
        setSlidesPerView(1.1);
      } else if (screenWidth <= 900) {
        setSlidesPerView(1.5);
      } else if (screenWidth <= 1200) {
        setSlidesPerView(1.7);
      } else {
        setSlidesPerView(2.2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const images = [
    {
      user: "data:image/jpeg;base64,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",
      message:
        " Hamis Biscuits are a taste revelation! Butter Bisk melts in your mouth, Coconut Crunchy is a delightful texture blend, and Black Moment satisfies chocolate cravings. The new launches-Spin Elaichi, Spin Orange, and Spin Chocolate-are pure joy in every bite!  ",
      name: "Ramesh Kumar",
      proffetion: "Constrution Contractor",
    },
    {
      //   src: image1,
      user: "data:image/jpeg;base64,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",
      message:
        " Hamis Biscuits are a taste revelation! Butter Bisk melts in your mouth, Coconut Crunchy is a delightful texture blend, and Black Moment satisfies chocolate cravings. The new launches-Spin Elaichi, Spin Orange, and Spin Chocolate-are pure joy in every bite!  ",
      name: "Deepak Verma",
      proffetion: "Production Supervisor",
    },
    {
      //   src: image1,
      user: "data:image/jpeg;base64,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",
      message:
        " Hamis Biscuits are a taste revelation! Butter Bisk melts in your mouth, Coconut Crunchy is a delightful texture blend, and Black Moment satisfies chocolate cravings. The new launches-Spin Elaichi, Spin Orange, and Spin Chocolate-are pure joy in every bite!  ",
      name: "Rajesh Singh",
      proffetion: "Manufacturing Manager",
    },
  ];
  return (
    <div>
      {/* main heading */}
      <div className="main_heading Testimonials_main_heading">Testimonials</div>
      {/* slider */}
      <div className="main_swiper_testimonial">
        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={handleSlideChange}
          slidesPerView={slidesPerView}
          initialSlide={1}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            type: "fraction",
          }}
        >
          {images.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              style={{ position: "relative" }}
              className="main_slider"
            >
              {/* main_div */}
              <div className="main_parent_div_of_testimonial"
               style={{
                transform: `scale(${activeIndex === index ? 1 : 0.8})`,
                transition: "transform 0.3s ease-in-out",
              }}
              >
                {/* data */}
                <div className="main_data_tesimonail">
                  {/* image */}
                  <div className="testimonail_image_div">
                    <img
                      src={testimonial.user}
                      alt="te"
                      className="testimonial_image"
                    />
                  </div>
                  <div className="testimonail_review_text_div">
                    <div className="testimonail_review_text">Review</div>
                  </div>
                  {/* message */}
                  <div className="testimonail_review_message_parent">
                    {/* text */}
                    <div className="testimonail_review_message">
                      <div className="message_testimonial_first_image_div">
                        <img
                          src={MessageFirstImage}
                          alt="desing"
                          className="message_testimonial_image"
                        />
                      </div>
                      <div className="text">{testimonial.message}</div>
                      <div className="message_testimonial_last_image_div">
                        <img
                          src={MessageSecondImage}
                          alt="desing"
                          className="message_testimonial_image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* user name */}
                  <div className="testimonail_review_user_name">
                    {" "}
                    {testimonial.name}{" "}
                  </div>
                  <div className="desing_testimonial_image_div">
                    <img
                      src={DesingImage}
                      alt="desing"
                      className="desing_testimonial_image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
