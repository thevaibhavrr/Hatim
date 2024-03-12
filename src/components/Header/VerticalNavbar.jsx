import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Header/verticalNavbar.css";
import mainIcon from "../../Images/navbar/hamis-Logo 1.png";


function SmallNavbar() {
  const [showVerticalNavbar, setShowVerticalNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowVerticalNavbar(false);
  }, [location]);

  const toggleVerticalNavbar = () => {
    setShowVerticalNavbar(!showVerticalNavbar);
  };

  return (
    <>
      {/* navbar for small screen */}
      <div className="card_for_small_screen navbar_for_small_screen ">
        <nav className="navbar navbar-expand-lg px-2">
          <div
            className="d-flex justify-content-evenly w-100 "
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="5000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="w-100 text-center">
              <Link to={"/"} className="css-for-link-tag">
                <img src={mainIcon} alt="" srcset="" className="header-logo header_logo_for_small_screen" />
              </Link>
            </div>
            <div className="vertical_navbar_Icon_div " onClick={toggleVerticalNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-filter-right  "
                viewBox="0 0 16 16"
              >
                <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
              </svg>
            </div>
          </div>

          {/* Vertical Navbar */}
          {showVerticalNavbar && (
            <div className="vertical-navbar ">
              <ul
                className="navbar_ul_for_small_screen"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <Link to={"/"} className="css-for-link-tag">
                  <li>HOME</li>
                </Link>
                <Link to={"/about"} className="css-for-link-tag">
                  <li>ABOUT US</li>
                </Link>
                <Link to={"/product"} className="css-for-link-tag">
                  <li>PRODUCTS</li>
                </Link>
                <Link to={"/ContactUs"} className="css-for-link-tag">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default SmallNavbar;
