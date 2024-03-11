import React from 'react'
import Locate from './locate'
import "../../../styles/Contact/mainContactUsBG.css"
import ContactUsForm from './form'
import Wheretofind from './Wheretofind'
function MainContactBg() {
  return (
    <div className='main_contact_us_div' >
        <Locate/>
        <ContactUsForm/>
        <Wheretofind/>
    </div>
  )
}

export default MainContactBg