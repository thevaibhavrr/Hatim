import React, { useEffect, useState } from "react";
import "../../styles/Home/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DesingImage from "../../Images/Home/testmonialbottomdesiing.png";
import MessageFirstImage from "../../Images/Home/testimonial1.png";
import MessageSecondImage from "../../Images/Home/testimonail2.png";
import fistuser from "../../Images/Home/testimonail5.jpg";
import seconduser from "../../Images/Home/testimonail6.jpg";
import thirduser from "../../Images/Home/testimonial3.jpg";

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
      user: fistuser,
      message:
        " Hamis Biscuits are a taste revelation! Butter Bisk melts in your mouth, Coconut Crunchy is a delightful texture blend, and Black Moment satisfies chocolate cravings. The new launches-Spin Elaichi, Spin Orange, and Spin Chocolate-are pure joy in every bite!  ",
      name: "Ramesh Kumar",
      proffetion: "Constrution Contractor",
    },
    {
      user : seconduser,
      message:
      "Love Hamis Biscuits! The Butter Bisk is smooth perfection, Coconut Crunchy is addictively textured, and Black Moment is chocolate heaven. The Spin flavors are my new must-haves—pure joy with each taste!",
      name: "Deepak Verma",
      proffetion: "Production Supervisor",
    },
    {
      user : thirduser,
      message:
      "Hamis Biscuits are next-level! The Butter Bisk just melts away, while Coconut Crunchy adds the perfect crunch. Black Moment hits the chocolate spot every time. And the new Spin varieties? Simply awesome in every bite!",      name: "Rajesh Singh",

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
