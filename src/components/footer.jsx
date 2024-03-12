import React from "react";
import "../styles/footer.css";
import Icon from "../Images/navbar/hamis-Logo 1.png";
// import socail_media from "../Images/footer/Frame 8.png";
import Phone from "../Images/footer/Phone Squared.png";
import email from "../Images/footer/Email.png";
import Location from "../Images/footer/Location.png";
import Facebook from "../Images/footer/Facebook.png";
import Instagram from "../Images/footer/Instagram Circle.png";
import TwitterX from "../Images/footer/TwitterX.png";
import YouTube from "../Images/footer/YouTube.png";
import { Link } from "react-router-dom";

function Footer() {
  
  return (
    <>
      <div className="first_footer_div_gry">
        <div className="main_footer_div">
          {/* image */}
          <div className="first_footer_div ">
            <div>
              <img
                src={Icon}
                alt="icon"
                className="img-fluid footer_copany_icon"
              />
            </div>
            <div className="ms-5">
              <div className="footer_hading ps-5">Check Us Out On</div>
              <div className="socail_media_icons_footer_div"  >
                {/* 1 */}
                <div>
                  <img
                    src={Facebook}
                    alt="icon"
                    className="img-fluid footer_copany_icon_images"
                  />
                </div>
                {/* 2 */}
                <div>
                  <img
                    src={Instagram}
                    alt="icon"
                    className="img-fluid footer_copany_icon_images"
                  />
                </div>
                {/* 3 */}
                <div>
                  <img
                    src={TwitterX}
                    alt="icon"
                    className="img-fluid footer_copany_icon_images"
                  />
                </div>
                {/* 4 */}
                <div>
                  <img
                    src={YouTube}
                    alt="icon"
                    className="img-fluid footer_copany_icon_images"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* message */}
          <div className="footer_message">
            <ul className="footer_message_ul">
              <li>
                {" "}
                <h5 className="footer_hading"> Direct Links</h5>
              </li>
              <li className="footer_options">
                <Link to={"/"} className=" css-for-link-tag">
                  <li>Home</li>
                </Link>
              </li>
              <li className="footer_options">
                <Link to={"/product"} className=" css-for-link-tag">
                  <li>Products</li>
                </Link>
              </li>
              <li className="footer_options">
                {" "}
                <Link to={"/ContactUs"} className=" css-for-link-tag">
                  <li>Contact Us</li>
                </Link>
              </li>
              <li className="footer_options">
                {" "}
                <Link to={"/about-us"} className=" css-for-link-tag">
                  <li>About Us</li>
                </Link>
              </li>
            </ul>
          </div>
          {/* adress */}
          <div className="footer_address">
            {/* images */}
            <h4 className="footer_hading">Where to Find Us </h4>

            {/* text */}
            <div className="footer_address_inside_div">
              <div className="">
                <img
                  src={Location}
                  alt=""
                  srcset=""
                  className="address_details_images"
                />
              </div>
              <div className="footer_hading">
                Funjoy Food Products (Pvt) Ltd. Naudharani Road to Madevi Road,
                Malerkotla, Punjab - 148023, India
              </div>
            </div>
            <div className="footer_address_inside_div">
              <div>
                <img
                  src={email}
                  alt=""
                  srcset=""
                  className="address_details_images"
                />
              </div>

              <div className="footer_hading">hamisfoods6@gmail.com</div>
            </div>
            <div className="footer_address_inside_div">
              <div>
                <img
                  src={Phone}
                  alt=""
                  srcset=""
                  className="address_details_images"
                />
              </div>

              <div className="footer_hading">+91-9815823713</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
