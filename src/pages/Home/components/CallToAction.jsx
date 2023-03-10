import React, { useRef } from "react";
import { Btn } from "@components/Btn";
import { Cloud, PostIdea } from "@assets/img/svg";
import Helper from "@helpers/index";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function CallToAction() {

  return (
    <div className="flex justify-center">
      <div className="contained bg-default-blue flex flex-col justify-center py-20 rounded-t-2xl">
        <div className="lg:w-3/5 m-auto">
          <h1 className="text-xl text-center lg:text-3xl font-bold leading-snug mx-auto mb-4 uppercase text-white xs:px-8 md:px-0 lg:w-[450px] lg:leading-relaxed">
            Empowering innovative businesses for growth.
          </h1>

          <div className="mt-5 mx-auto lg:w-[500px] mb-10 flex flex-col lg:flex-row justify-center items-center gap-5">
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

            <a href={Helper.env.VITE_DOWNLOAD_GUIDE} target="_self" className="block" download>
              <Btn
                content={
                  <span className="flex items-center">
                    <Cloud className="h-5 w-5 mr-1.5 -mt-1" /> Download Guide
                  </span>
                }
                variant="outlined"
                className="bg-transparent border-primary text-primary hover:bg-white h-14 w-44"
              />
            </a>
          </div>

        </div>
          <LiteYouTubeEmbed
            id="WkozOAkMV_g"
            title="Introduction to be investible"
            iframeClass="w-full lg:w-[740px] lg:h-[560px]"
          />
      </div>
    </div>
  );
}
