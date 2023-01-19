import React from 'react'

export default function JudgeCard({ img, content }) {
  return (
    <div className="w-full relative rounded overflow-hidden">
      <img src={img} alt="" className="h-[342px]" />

      <div className="bg-white rounded-[4px] py-3 p-5 flex w-10/12 absolute bottom-9 mx-[8.3%]">{content}</div>
    </div>
  )
}
