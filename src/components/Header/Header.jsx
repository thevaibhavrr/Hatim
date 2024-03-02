import React from "react";
import Navbar from "./mainNavbar";
import "../../styles/Header/header.css"
import SmallNavbar from "./VerticalNavbar";

function Header() {
  return (
    <>
      <div className="" >
        {/* navbar for small screen */}
        <div className="navbar_for_small_scree main_header_for_small_nav">
            <SmallNavbar />
        </div>

        {/* for big screen navbar */}
        <div className="navbar_for_big_screen">
          <Navbar/>
        </div>
      </div>
    </>
  );
}

export default Header;
