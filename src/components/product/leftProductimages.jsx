import React from 'react'
import "../../styles/product/leftProductImages.css"
import location from "../../Images/Product/location_icon.png"
function LeftProductImages({ left, right, main, flavour, price, secondprice }) {
    return (
        <div className='main_right_side_proudcts_top_parent_div'>
            {/* orange */}
            <div className='main_product_images_parant_div_left_product' >
                {/* text */}
                <div className='main_product_text_div_section' data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="800"
            data-aos-duration="1000">
                    <div className='image_text_products_red_color text-uppercase' > hamis {flavour} </div>
                    <div className='image_text_products_red_color_bottom_section' >
                        <div>
                            Presented in <br /> Packs of
                        </div>
                        <div className='location_icon_product_text_page' >
                            <img src={location} alt="location" className='location_icon_product_text_page' />
                            <div className='location_price' >₹ {price}</div>
                        </div>
                        {secondprice &&
                            <div className='location_icon_product_text_page' >
                                <img src={location} alt="location" className='location_icon_product_text_page' />
                                <div className='location_price' >₹{secondprice}</div>
                            </div>
                        }
                    </div>
                </div>
                {/* image */}
                <div className='product_images_main_div' data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="800"
            data-aos-duration="1000">
                    {/* center main image */}
                    <div className='main_orange_center_image_div' >
                        {/* left image */}
                        <div className='left_side_left_product_image ' >
                            <img src={left} alt='left' className='img-fluid right_side_top_product_image ' />
                        </div>
                        <div>
                            <img src={main} alt='left' className='main_orange_center_image' />
                        </div>

                        {/* right image */}
                        <div className='left_side_right_product_image' >
                            <img src={right} alt='left' className='right_side_top_product_image' />
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default LeftProductImages   