import React from 'react'
import Banner from '../components/Home/Banner'
import OurStory from '../components/Home/ourStory'
import MainProduct from '../components/Home/Products/mainProduct'
import Testimonial from '../components/Home/testimonial'

function Home() {
  return (
    <div>
        <Banner/>
        <OurStory/>
        <MainProduct/>
        <Testimonial/>
    </div>
  )
}

export default Home