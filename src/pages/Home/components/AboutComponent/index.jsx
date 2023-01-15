import React from 'react'
import Info from './Info'
import Stats from './Stats'
import VideoComponent from './VideoComponent'

export default function AboutComponent() {
  return (
    <div className="flex justify-center bg-default-red py-20">
      <div className="w-full container grid grid-cols-2 grid-rows-2">
        <Info />
        <Stats />
        <VideoComponent />
      </div>
    </div>
  )
}
