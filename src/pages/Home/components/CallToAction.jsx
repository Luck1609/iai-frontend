import React, { useRef } from "react";
import { Btn } from "@components/Btn";
import { Cloud, PostIdea } from "@assets/img/svg";
import VideoComponent from "./AboutComponent/VideoComponent";

export default function CallToAction() {

  return (
    <div className="flex justify-center">
      <div className="contained bg-default-blue flex justify-center py-20 rounded-t-2xl">
        <div className="lg:w-3/5">
          <h1 className="text-xl text-center lg:text-3xl font-bold leading-snug mx-auto mb-4 uppercase text-white lg:w-[420px] lg:leading-relaxed">
            WE Empower innovative businesses for growth.
          </h1>

          <div className="mt-5 mx-auto lg:w-[400px] mb-10 flex flex-col lg:flex-row justify-center items-center gap-5">
            <Btn
              content={
                <span className="flex items-center">
                  <PostIdea className="h-5 w-5 mr-1.5 -mt-1" fill="#0499FF" />{" "}
                  Submit Your Idea
                </span>
              }
              variant="outlined"
              className="animate-pulse border-primary text-primary hover:text-white hover:bg-primary h-14 lg:mr-8 w-44"
            />

            <Btn
              content={
                <span className="flex items-center">
                  <Cloud className="h-5 w-5 mr-1.5 -mt-1" /> Download Guide
                </span>
              }
              className="bg-transparent text-primary h-14 w-44"
              // ref={download}
            />
          </div>

          <VideoComponent position="top-44 left-96" />
        </div>
      </div>
    </div>
  );
}
