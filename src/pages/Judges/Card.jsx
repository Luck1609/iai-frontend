import React from "react";

export default function Card({ img, title, name, content, id}) {
  return (
    <div className="max-w-5xl w-full mx-auto rounded-xl overflow-hidden" id={id}>
      <div className="w-11/12 m-auto lg:w-full bg-white p-5 rounded">
        <img src={img} alt="Judge" className={`w-full lg:w-[320px] lg:h-[400px] float-left pr-5 pb-3 `} />

          <h5 className="font-semibold text-xl lg:text-3xl text-heading mb-3 uppercase">{name}</h5>
          <label className="font-medium block text-heading2 uppercase mb-5">
            {title}
          </label>


          { content }
        </div>
    </div>
  );
}
