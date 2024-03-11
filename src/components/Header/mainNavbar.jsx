import React from "react";
import "../../styles/Header/MainNavbar.css";
import Icon from "../../Images/navbar/hamis-Logo 1.png";
import { Link } from "react-router-dom";
function MainNavbar() {
  return (
    <>
      <div className="main_navbar_div">
        <Link to={"/about"} className="css-for-link-tag-for-header">
          <div className="main_navbar_li">ABOUT US</div>
        </Link>
        <Link to={"/"} className="css-for-link-tag-for-header">
          <div className="main_navbar_li">Home</div>
        </Link>
        <div className="">
          <img src={Icon} alt="logo" className="navbar_logo" />
        </div>
        <div className="main_navbar_li">PRODUCTS</div>
        <Link to={"/ContactUs"} className="css-for-link-tag-for-header">
          <div className="main_navbar_li">CONTACT US</div>
        </Link>
      </div>
    </>
  );
}

export default MainNavbar;
