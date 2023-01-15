import React from 'react'
import { images } from '@assets/img/images'
import { Play } from '@assets/img/svg'

export default function VideoComponent({ position }) {


  return (
    <div className="relative">
      <video poster={images.video_bg} className="relative rounded">
        <source src="" type="video/mp4" />
      </video>
      <Play className={`absolute ${position ?? "top-40 left-80"} z-10 h-8 w-8`} />
    </div>
  )
}
