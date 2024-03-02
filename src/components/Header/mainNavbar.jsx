import React from "react";
import "../../styles/Header/MainNavbar.css";
import Icon from "../../Images/navbar/hamis-Logo 1.png";
function MainNavbar() {
  return (
    <>
      <div className="main_navbar_div">
          <div className="main_navbar_li" >ABOUT US</div>
          <div className="main_navbar_li" >Home</div>
          <div className="" >
            <img src={Icon} alt="logo" className="navbar_logo"  />
          </div>
          <div className="main_navbar_li" >PRODUCTS</div>
          <div className="main_navbar_li" >CONTACT US</div>
      </div>
    </>
  );
}

export default MainNavbar;
