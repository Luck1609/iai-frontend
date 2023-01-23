import React from "react";
import { images } from "@assets/img/images";
import JudgeCard from "./JudgeCard";

export default function JudgesComponent() {
  return (
    <div className="flex justify-center py-16">
      <div className="max-w-6xl grid grid-cols-4 gap-5">
        <h2 className="text-4xl font-semibold mb-8 text-default-red col-span-4 text-center">
          Meet Our Judges{" "}
        </h2>
        <JudgeCard
          img={images.judge_1}
          content={
            <div className="text-lg text-center w-full">
              <label className="font-bold uppercase text-heading block mb-1">
                Dentaa Amoateng MBE
              </label>
              <span className="font-medium text-[#536673] text-[15px]">
                CEO, GUBA
              </span>
            </div>
          }
        />

        <JudgeCard
          img={images.judge_2}
          content={
            <div className="text-lg text-center w-full">
              <label className="font-bold uppercase text-heading block mb-1">
                Tornyi <p>Senayah</p>
              </label>
              <span className="font-medium text-[#536673] text-[15px]">
                CEO, Horseman
              </span>
            </div>
          }
        />

        <JudgeCard
          img={images.judge_3}
          content={
            <div className="text-lg text-center w-full">
              <label className="font-bold uppercase text-heading block mb-1">
                Angelina <p>diyuoh minski</p>
              </label>
              <span className="font-medium text-[#536673] text-[15px]">
                Managing Consultant , IAI
              </span>
            </div>
          }
        />

        <JudgeCard
          img={images.judge_4}
          content={
            <div className="text-lg text-center w-full">
              <label className="font-bold uppercase text-heading block mb-1">
                Ekow <p>mensah</p>
              </label>
              <span className="font-medium text-[#536673] text-[15px]">
                CEO, EMI Group Africa
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
