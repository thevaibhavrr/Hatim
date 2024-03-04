import React from "react";
import "../../../styles/About/CompnayDetails.css";
import VerifirdImage from "../../../Images/About/Approval.png";
import BestSallerImage from "../../../Images/About/Best Seller.png";
import CookieImage from "../../../Images/About/Cookie.png";
import GiftImage from "../../../Images/About/Wedding Gift.png";
import LineImage from "../../../Images/About/Line 5.png";

function CompanyDetails() {
  return (
    <>
      <div className="">
        {/* heading */}
        <div>
          MR. KULWANT SINGH.
          <br />
          FOUNDER & CO
        </div>

        {/* company details section */}
        <div className="main_company_details_div">
          {/* images */}
          <div className="main_company_details_Image_section">
            {/* veified image  */}
            <div>
              <img
                src={VerifirdImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            <div>
              <img
                src={LineImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            {/* best Saller image  */}
            <div>
              <img
                src={BestSallerImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            <div>
              <img
                src={LineImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            {/* cookies image  */}
            <div>
              <img
                src={CookieImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            <div>
              <img
                src={LineImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
            {/* Gift image  */}
            <div>
              <img
                src={GiftImage}
                alt="Logos"
                className="company_details_images"
              />
            </div>
          </div>
          {/* text */}
          <div className="main_company_details_text_section">
            {/* 1 */}
            <div className="main_company_details_text_div" >
              {/* heading */}
              <div>Certified</div>
              {/* details */}
              <div>Hamis (Pvt) Ltd is ISO 22000-2005 Certification.</div>
            </div>
            {/* 2 */}
            <div className="main_company_details_text_div" >
              {/* heading */}
              <div>High quality</div>
              {/* details */}
              <div>We provides tantalizing and wholesome Biscuits.</div>
            </div>
            {/* 1 */}
            <div className="main_company_details_text_div" >
              {/* heading */}
              <div>CLIENT SATISFACTION</div>
              {/* details */}
              <div>We strive to provide maximum client satisfaction.</div>
            </div>
            {/* 1 */}
            <div className="main_company_details_text_div" >
              {/* heading */}
              <div>QUALITY PRODUCTS</div>
              {/* details */}
              <div> Our customer centric approach and quality products.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;
