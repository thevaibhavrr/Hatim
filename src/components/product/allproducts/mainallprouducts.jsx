import React from 'react'
import RightProductImages from '../productImages'
import LeftProductImages from '../leftProductimages'
import "../../../styles/product/main_product.css"
// orange
import OrangeMainBiscut from "../../../Images/Product/Orange Biscuit.png"
import OrangeleftBisculte from "../../../Images/Product/Orange left.png"
import OrangeRightImage from "../../../Images/Product/Orange right.png"

// elichi
import lichiMainBiscut from "../../../Images/Product/left images/elichi biscuit.png"
import elichileftBisculte from "../../../Images/Product/left images/elichi left.png"
import elichiRightImage from "../../../Images/Product/left images/elichi right.png"

// choklate
import mainchoklete from "../../../Images/Product/choklete biscuit.png"
import leftChoklate from "../../../Images/Product/choklate left.png"
import rightChoklate from "../../../Images/Product/choklate right.png"

// butter 
import mainButter from "../../../Images/Product/left images/butter biscuit.png"
import leftButter from "../../../Images/Product/left images/butter left.png"
import rightButter from "../../../Images/Product/left images/butter right.png"

// coco
import mainCoco from "../../../Images/Product/coco biscuit.png"
import leftCoco from "../../../Images/Product/coco left.png"
import rightCoco from "../../../Images/Product/coco right.png"

// milk
import mainMilk from "../../../Images/Product/left images/milk biscuit.png"
import leftMilk from "../../../Images/Product/left images/milk left.png"
import rightMilk from "../../../Images/Product/left images/milk right.png"

// Chocolate 
import mainChocolate from "../../../Images/Product/left images/chocolate Biscuit.png"
import leftChocolate from "../../../Images/Product/left images/Chocolate left.png"
import rightChocolate from "../../../Images/Product/left images/Chocolate right.png"
function Mainallprouducts() {
    return (
        <div>
             <div className='main_product_component_div_chocolate' >'
                {/* Chocolate */}
                <LeftProductImages left={leftChocolate} right={rightChocolate} main={mainChocolate} flavour={"CHOCOLATE"} price={5}/>
            </div>
            <div className='main_product_component_div_orange' >
                {/* orange */}
                <RightProductImages main={OrangeMainBiscut} left={OrangeleftBisculte} right={OrangeRightImage} flavour={" SPAIN ORANGE "} price={5} />
            </div>.
            <div className='main_product_component_div_elichi' >'
                {/* elichi */}
                <LeftProductImages left={elichileftBisculte} right={elichiRightImage} main={lichiMainBiscut} flavour={"SPAIN Elichi"} price={5}/>
            </div>
            <div className='main_product_component_div_choklate' >
                {/* choklate */}
                <RightProductImages main={mainchoklete} left={leftChoklate} right={rightChoklate} flavour={" BLACK MOMENT "} price={5}/>
            </div>
            <div className='main_product_component_div_butter' >
            {/* butter */}
            <LeftProductImages left={leftButter} right={rightButter} main={mainButter} flavour={"BUTTER BISK"} price={5} secondprice={10} />
            </div>
            <div className='main_product_component_div_coco' >
            {/* coco */}
            <RightProductImages main={mainCoco} left={leftCoco} right={rightCoco} flavour={"COCONUT CRUNCHY"} price={5} secondprice={10}/>
            </div>
            <div className='main_product_component_div_milk' >
            {/* milk */}
            <LeftProductImages left={leftMilk} right={rightMilk} main={mainMilk} flavour={"MILK BISK"} price={5}/>
            </div>
        </div>
    )
}

export default Mainallprouducts