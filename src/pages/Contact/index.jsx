import Hero from '@components/Hero'
import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <div className="bg-[#FCF0F0] pb-16">
      <Hero title="Let's answer all your questions." />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}
