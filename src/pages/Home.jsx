import React from 'react'
import Banner from '../components/Home/Banner'
import OurStory from '../components/Home/ourStory'
import MainProduct from '../components/Home/Products/mainProduct'
import Testimonial from '../components/Home/testimonial'
import YTVideo from '../components/Home/video'

function Home() {
  return (
    <div>
        <Banner/>
        <OurStory/>
        <MainProduct/>
        <YTVideo/>
        <Testimonial/>
    </div>
  )
}

export default Home