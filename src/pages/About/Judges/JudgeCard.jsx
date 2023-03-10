import React from "react";
import { ArrowRight,  } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

export default function JudgeCard({ img, title, name, content, id }) {
  return (
    <div className="max-w-5xl w-full mx-auto rounded-xl overflow-hidden">
      <div className="w-11/12 lg:w-full mx-auto bg-white flex items-center flex-col lg:flex-row rounded-xl overflow-hidden">
        <img src={img} alt="Judge" className=" w-full lg:w-[280px]" />

        <div className="w-full p-5 lg:p-10">
          <span className="font-medium block mb-2 text-heading2 uppercase">
            {title}
          </span>
          <h5 className="font-semibold text-xl lg:text-3xl text-heading mb-5">{name}</h5>
          <p className="h-[75px] lg:h-auto overflow-y-hidden">{content}</p>

          <HashLink to={`/judges${id}`} className="flex items-center text-heading2 mt-3">
            See full bio <ArrowRight />
          </HashLink>
        </div>
      </div>
    </div>
  );
}
