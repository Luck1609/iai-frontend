import React, { useRef } from "react";
import { Btn } from "@components/Btn";
import { Cloud, PostIdea } from "@assets/img/svg";
import VideoComponent from "./AboutComponent/VideoComponent";
import Helper from "@helpers/index";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function CallToAction() {

  return (
    <div className="flex justify-center">
      <div className="contained bg-default-blue flex justify-center py-20 rounded-t-2xl">
        <div className="lg:w-3/5">
          <h1 className="text-xl text-center lg:text-3xl font-bold leading-snug mx-auto mb-4 uppercase text-white lg:w-[420px] lg:leading-relaxed">
            Empowering innovative businesses for growth.
          </h1>

          <div className="mt-5 mx-auto lg:w-[400px] mb-10 flex flex-col lg:flex-row justify-center items-center gap-5">
            <Btn
              content={
                <span className="flex items-center">
                  <PostIdea className="h-5 w-5 mr-1 -mt-1" fill="#0499FF" />{" "}
                  Submit Your Idea
                </span>
              }
              variant="outlined"
              className="animate-pulse border-primary text-primary hover:bg-white h-14 lg:mr-8 w-44"
            />

            <a href={Helper.env.VITE_DOWNLOAD_GUIDE} className="block">
              <Btn
                content={
                  <span className="flex items-center">
                    <Cloud className="h-5 w-5 mr-1.5 -mt-1" /> Download Guide
                  </span>
                }
                className="bg-transparent hover:bg-white text-primary h-14 w-44"
                // ref={download}
              />
            </a>
          </div>

          <LiteYouTubeEmbed
            id="aqVzCDbLwb0"
            // className="h-80 w-full"
          />
        </div>
      </div>
    </div>
  );
}
