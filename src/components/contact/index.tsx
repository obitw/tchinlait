import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import GoogleMap from './GoogleMap'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <>
      <Breadcrumnd title="Contact" subtitle="Contact" />
      <GoogleMap />
      <ContactInfo />
    </>
  )
}
