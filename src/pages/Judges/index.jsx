import { images } from "@assets/img/images";
import React from "react";
import Card from "./Card";

export default function JudgesComponent() {
  return (
    <div className="w-full m-auto bg-[#FCF0F0] pt-16 lg:py-28">

      <h1 className="text-2xl lg:text-4xl font-bold text-red-text text-center p-10">Meet Our Judges</h1>

      <div className="max-w-5xl m-auto grid gap-16">
        <Card
          img={images.judge_1}
          id="guba"
          title="CEO, GUBA"
          name="Dentaa Amoateng MBE"
          content={
            <div className="grid gap-8 text-justify">
              <p className="leading-8 lg:leading-relaxed">
                Lady Dentaa Amoateng MBE is a British Ghanaian entrepreneur,
                actress, TV presenter, singer, producer and manager. President
                of the Grow, Unite, Build, Africa (GUBA) Enterprise. GUBA
                Enterprise is the Diaspora Network Manager par excellence and
                continues to grow into an impactful social venture network.
              </p>
              <p className="leading-8 lg:leading-relaxed">
                She is a visionary, humanitarian and leader. The GUBA Awards has
                been recognised as a community-building organization with
                substantial influence. Her work to improve UK-African relations
                earned her an MBE in Her Majesty the Queen Elizabeth II’s 2016
                Birthday Honours. As the President of the GUBA Enterprise, her
                work, consistently connects and mobilizes the African Diaspora.
                She was named among 100 most influential women in Africa in
                November 2022. She is currently the Diaspora and International
                Relations Manager of Asante Kotoko SC)
              </p>
            </div>
          }
        />

        <Card
          img={images.judge_2}
          id="horseman"
          title="CEO, Horseman"
          name="Tornyi Senayah"
          content={
            <>
              <p className="leading-8 lg:leading-relaxed text-justify">
                Tonyi Senayah is a Ghanaian entrepreneur and the founder/CEO of
                Horseman Shoes, a footwear manufacturing company he established
                in 2010, with a desire to create employment for young people
                with skills in shoemaking, as well as to produce high quality
                locally made shoes. Tonyi's vision is to build Africa's biggest
                footwear manufacturing company in terms of employment and brand
                preference. During the delivery of the annual 'State of The
                Nation' address in February 2014, The President of Ghana
                endorsed Horseman Shoes as a manufacturer of high quality shoes
                of worldclass standards. He was the president of the Alliance of
                Young Entrepreneurs, Ghana from 2012 - 2016 and is also Fellow
                of President Obama's Young African Leaders Initiative (YALI 2012
                cohort).
              </p>
              <p className="leading-8 lg:leading-relaxed text-justify mt-12">
                He has an executive certificate in “Law and management for
                Ghanaian entrepreneurs” from the Hertie School, Berlin, in
                cooperation with the University of Ghana School of Law Tonyi
                Senayah is a recipient of several awards and recognitions,
                notable among them are:
                <ul className="mt-3">
                  <li className="">
                    • Chartered Institute of Marketing Ghana, President's
                    Special Award- 2015{" "}
                  </li>
                  <li className="">
                    • "Young Enterprise Company of the Year 2013", by
                    Association of Ghana Industries
                  </li>
                  <li className="">
                    • "Best Leather Company of the Year 2013", by Association of
                    Ghana Industries
                  </li>
                  <li className="">
                    • "Brand Discovery Award 2013", at the maiden SME Ghana
                    Awards.
                  </li>
                  <li className="">
                    • "The Most Promising Entrepreneur Award", at the 4th UT
                    Bank Ghana Entrepreneurs Award, 2014.
                  </li>
                  <li className="">
                    • "Outstanding Entrepreneur Special Award" by Diageo,
                    Guinness Ghana Ltd.
                  </li>
                </ul>
              </p>
            </>
          }
        />


        <Card
          img={images.judge_3}
          title="Managing Consultant, iAi"
          id="iai"
          name="Angelina Diyuoh Minski"
          content={
            <>
              <p className="leading-8 lg:leading-relaxed text-justify">
                Angelina Diyuoh Minski is a Private Sector Development Expert
                with over 14 years experience in Project Management and SME
                Development leading initiatives aimed at developing the
                capabilities of SME’s to be competitive by facilitating access
                to skills, markets and finance. She is the Managing Consultant
                of I AM INVESTIBLE, an initiative focused on supporting
                entrepreneurs to accelerate their growth through funding and
                mentorship support.
              </p>
              <p className="leading-8 lg:leading-relaxed text-justify mt-8">
                Prior to this role, she was the Head of Capacity Building and
                Partnerships Africa, at Invest in Africa (IIA). She oversaw the
                strategic direction of IIA capacity building programmes in its
                African markets including Ghana, Kenya, Mauritania, and Senegal.
                She was also the lead consultant for the implementation of the
                Madagascar Business Linkage Programme funded by the African
                Development Bank. She served as the programme Director for the
                IIA/Mastercard Foundation Resilience and Recovery programme
                delivered in three countries, created 22,000 jobs and supported
                over 10,000+ young people and women to recover from the pandemic
                and become resilient. She has a proven track record of starting,
                building and scaling capacity building programmes and teams into
                African markets. She also worked with the British Council in
                many capacities with the last being Skills Development and
                Partnership Manager. She is the Co-founder of East Bridge
                International School. A certified Productivity Coach, Prince 2
                Practitioner and has a Post Graduate Certificate in Quality
                Service from the University of Wales.
              </p>
            </>
          }
        />

        <Card
          img={images.judge_4}
          id="emi"
          title="CEO, EMI Group Africa"
          name="Ekow Mensah"
          content={
            <>
              <p className="leading-8 lg:leading-relaxed text-justify">
                Ekow is named amongst the 100 Most Influential Young Africans, 50 Most Influential Young Ghanaians, 60 Young Leaders in Ghana by CocaCola, Top 100 Speakers in Ghana and a Finalist Nominee for the African Leadership Academy Anzisha Prize for African Entrepreneurship Catalyst Award sponsored by MasterCard Foundation mostly for his extensive work on student & youth development, entrepreneurship development, women economic empowerment, gender mainstreaming, capacity building in Gender, Diversity and Inclusion (DEI) and Environment, Social and Governance (ESG) and social enterprise policy development and advocacy.
              </p>
              <p className="leading-8 lg:leading-relaxed text-justify mt-8">
                Ekow is an internationally certified coach by International Coaching Federation (ICF) and Managing Consultant for Ekow Mensah Consulting working with notable organizations such British Council, Development Bank Ghana, Ghana National Chamber of Commerce, Ashesi University, Invest in Africa, JACCD Design Institute Africa, KAIPTC, Ghana Tech Lab, MEST, Design & Technology Institute, Kosmos Innovation Center, VLISCO, BHEARD and several others to design, implement, monitor and evaluate programs around youth development, gender equality, diversity and inclusion, agribusiness development, entrepreneurship, design thinking and innovation.
              </p>
              <p className="leading-8 lg:leading-relaxed text-justify mt-8">
                As the CEO of EMI Group Africa; Ekow oversees subsidiaries and initiatives including but not limited to The African Network of Entrepreneurs (TANOE) organizers of Ghana Startup Awards and Startup Club 100, The WomanRising Network, IConceptsPR, TechWomen 100, CareerCare Africa, JobHanta, EMILuxe Center, Business Growth Monitor, HustleAid amongst several others. 
              </p>
              <p className="leading-8 lg:leading-relaxed text-justify mt-8">
                As an international consultant for 10 years for DWELLWORKS based in USA, Ekow has worked with Expatriates and business leaders in top international organizations such as Heineken and Guinness, Unilever in Ghana, Sierra Leone and Liberia on intercultural fluency, gender mainstreaming, organizational development, leadership and team building.
              </p>
              <p className="leading-8 lg:leading-relaxed text-justify mt-8">
                As a mentor, Ekow runs the Ambitious Students’ Mentorship Program with over 240 students in 19 universities in Ghana and 50 other mentors building the capacity of the students and guiding them to make the right career choices and make them job-ready. Over the years, Ekow has been a mentor on several programs and organizations including Ashesi University, YALI RLC West Africa Emerging Leaders Program, EU: Africa Post Crisis Journey, Kosmos Innovation Center Agritech Challenge, Founder’s Institute and Lancaster University.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
