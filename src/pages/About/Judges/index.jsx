import { images } from '@assets/img/images'
import React from 'react'
import JudgeCard from './JudgeCard'

export default function Judges() {
  return (
    <div className="py-16 grid gap-8">
      <h2 className="text-4xl font-bold mb-8 text-[#57CAF1] text-center">Meet Our Judges</h2>

      <JudgeCard 
        img={images.judge_1_short}
        title="CEO, Guba"
        name="Dentaa Amoateng MBE"
        content="Eget porta enim consequat cubilia efficitur posuere proin consectetur at. Eget nulla fames dictum sagittis eleifend nibh. Adipiscing ligula volutpat vestibulum quisque vel..."
      />

      <JudgeCard 
        img={images.judge_2_short}
        title="CEO, Horseman"
        name="Tonyi Senayah"
        content="Eget porta enim consequat cubilia efficitur posuere proin consectetur at. Eget nulla fames dictum sagittis eleifend nibh. Adipiscing ligula volutpat vestibulum quisque vel..."
      />

      <JudgeCard 
        img={images.judge_3_short}
        title="Managing Consultant, IAI"
        name="Angelina Diyuoh Minski"
        content="Eget porta enim consequat cubilia efficitur posuere proin consectetur at. Eget nulla fames dictum sagittis eleifend nibh. Adipiscing ligula volutpat vestibulum quisque vel..."
      />

      <JudgeCard 
        img={images.judge_4_short}
        title="CEO, EMI Group Africa"
        name="Ekow Mensah"
        content="Eget porta enim consequat cubilia efficitur posuere proin consectetur at. Eget nulla fames dictum sagittis eleifend nibh. Adipiscing ligula volutpat vestibulum quisque vel..."
      />
    </div>
  )
}
