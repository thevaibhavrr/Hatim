import React from 'react'
import ProductBanner from '../components/product/ProductBanner'
import BiteIntotext from '../components/product/biteIntotext'
import Mainallprouducts from '../components/product/allproducts/mainallprouducts'
import Transtion from '../transation'

function Product() {
  return (
    <div>
        <ProductBanner/>
        <BiteIntotext/>
        {/* <ProductImages/> */}
        <Mainallprouducts/>
    </div>
  )
}

export default Transtion(Product)