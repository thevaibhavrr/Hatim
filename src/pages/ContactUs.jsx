import React from 'react'
import ContactBanner from '../components/Contact/ContactBanner'
import MainContactBg from '../components/Contact/BgSection/MainContactBg'
import Transtion from '../transation'

function ContactUs() {
  return (
    <div>
      <ContactBanner/>
      <MainContactBg/>
    </div>
  )
}

export default Transtion(ContactUs)