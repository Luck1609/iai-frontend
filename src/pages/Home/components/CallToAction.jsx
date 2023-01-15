import React from 'react'
import { Btn } from '@components/btn'
import { Cloud, PostIdea } from '@assets/img/svg'
import VideoComponent from './AboutComponent/VideoComponent'

export default function CallToAction() {
  return (
    <div className="flex justify-center">
      <div className="container bg-default-blue flex justify-center py-20">
        <div className="w-3/5">
          <h1 className="text-3xl font-bold leading-snug mx-auto mb-4 uppercase text-white w-[400px] text-left">WE Empower innovative businesses for growth.</h1>

          <div className="mt-5 mx-auto w-[400px] mb-10">
            <Btn 
              content={<span className="flex items-center"><PostIdea className="h-5 w-5 mr-1.5 -mt-1" /> Submit Your Idea</span>}
              className="bg-primary h-14 mr-8"
            />

            <Btn 
              content={<span className="flex items-center"><Cloud className="h-5 w-5 mr-1.5 -mt-1" /> Download  Guide</span>}
              className="bg-transparent text-primary h-14"
            />
          </div>
        
          <VideoComponent position="top-44 left-96" />
        </div>
      </div>
    </div>
  )
}
