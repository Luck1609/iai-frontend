import React from "react";
import { ArrowRight,  } from "@mui/icons-material";
import Link from "@components/link";

export default function JudgeCard({ img, title, name, content }) {
  return (
    <div className="max-w-5xl w-full mx-auto rounded-xl overflow-hidden">
      <div className="w-full bg-white flex items-center">
        <img src={img} alt="Judge" className="w-[280px]" />

        <div className="w-full p-10">
          <span className="font-medium block mb-2 text-[#57CAF1] uppercase">
            { title }
          </span>
          <h5 className="font-semibold text-3xl text-heading mb-5">
            { name }
          </h5>
          <p className="">
            { content }
          </p>

          <Link url="/" className="flex items-center text-[#57CAF1] mt-3">See full bio <ArrowRight /></Link>
        </div>
      </div>
    </div>
  );
}
