import { images } from '@assets/img/images'
import React from 'react'
import JudgeCard from './JudgeCard'

export default function Judges() {
  return (
    <div className="py-16 grid gap-8 px-5">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-heading2 text-center">
        Meet Our Judges
      </h2>

      <JudgeCard
        img={images.judge_1_short}
        id="#guba"
        title="CEO, Guba"
        name="Dentaa Amoateng MBE"
        content="Lady Dentaa Amoateng MBE is a British Ghanaian entrepreneur, actress, TV presenter, singer, producer and manager."
      />

      <JudgeCard
        img={images.judge_2_short}
        id="#horseman"
        title="CEO, Horseman"
        name="Tornyi Senayah"
        content="Tornyi Senayah is a Ghanaian entrepreneur and the founder/CEO of Horseman Shoes, a footwear manufacturing company he established in 2010."
      />

      <JudgeCard
        img={images.judge_3_short}
        id="#iai"
        title="Managing Consultant, IAI"
        name="Angelina Diyuoh Minski"
        content="Angelina Diyuoh Minski is a Private Sector Development Expert with over 14 years experience in Project Management and SME Development leading initiatives."
      />

      <JudgeCard
        img={images.judge_4_short}
        id="#emi"
        title="CEO, EMI Group Africa"
        name="Ekow Mensah"
        content="Ekow is named amongst the 100 Most Influential Young Africans, 50 Most Influential Young Ghanaians, 60 Young Leaders in Ghana by CocaCola, Top 100 Speakers in Ghana."
      />
    </div>
  );
}
