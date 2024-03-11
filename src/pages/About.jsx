import React from 'react'
import ImagesectionAbout from '../components/About/imagesection'
import MainAboutBG from '../components/About/mainAboutBg/MainAboutBG'
import History from '../components/About/History'
import GoofLife from '../components/About/GoofLife'

function About() {
  return (
    <div>
      <ImagesectionAbout/>
      <MainAboutBG/>
      <History/>
      <GoofLife/>
    </div>
  )
}

export default About