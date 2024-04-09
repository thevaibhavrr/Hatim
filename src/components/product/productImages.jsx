import React from 'react'
import "../../styles/product/ProductImages.css"
import location from "../../Images/Product/location_icon.png"
function RightProductImages ({ left , right, main , flavour } ) {
    return (
        <div className='main_right_side_proudcts_top_parent_div'>
        {/* orange */}
            <div className='main_product_images_parant_div' >
                <div className='main_product_text_div_section' >
                    <div className='image_text_products_red_color text-uppercase' > hamis {flavour} </div>
                    <div className='image_text_products_red_color_bottom_section' >
                        <div>
                            Presented in <br /> Packs of
                        </div>
                        <div>
                            <img src={location} alt="location" className='location_icon_product_text_page' />
                        </div>
                    </div>
                </div>
                <div className='product_images_main_div' >
                    {/* left image */}
                    {/* center main image */}
                    <div className='main_orange_center_image_div' >
                    <div className='left_product_image ' >
                        <img src={ right} alt='left' className='img-fluid right_side_top_product_image ' />
                    </div>
                    <div>
                        <img src={ main } alt='left' className='main_orange_center_image' />
                    </div>

                    <div className='right_product_image' >
                        <img src={ left } alt='left' className='right_side_top_product_image' />
                    </div>
                    </div>
                    {/* right image */}
                </div>
            </div>


        </div>
    )
}

export default RightProductImages   