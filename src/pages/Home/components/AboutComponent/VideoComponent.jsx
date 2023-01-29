import React from "react";
import { images } from "@assets/img/images";
// import { Play } from "@assets/img/svg";

export default function VideoComponent({ position }) {
  return (
    <div className="relative w-11/12 mx-auto lg:w-full hidden">
      <img src={images.video_bg} alt="" className="" />
      {/* <Play
        className={`absolute ${position ?? "top-40 left-80"} z-10 h-8 w-8`}
      /> */}
    </div>
  );
}
