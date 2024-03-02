import React from 'react'
import "../../styles/Home/Banner.css"
import Banner_Image from "../../Images/Home/Hamis_Cover1 1.png"
function Banner() {
  return (
    <>
    <div className='main_banner_div' >
        <img src={Banner_Image} alt="banner" className='home_page_banner_image' />
    </div>
    </>
  )
}

export default Banner