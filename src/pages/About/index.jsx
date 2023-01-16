import React from 'react'
import Hero from '@components/Hero'
import AboutInfo from './AboutInfo'
import Services from './Services'
import Judges from './Judges'

export default function About() {
  return (
    <div className="bg-[#FCF0F0] pb-20">
      <Hero />
      <AboutInfo />
      <Services />
      <Judges />
    </div>
  )
}
