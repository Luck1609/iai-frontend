import React from "react";
// import { PlayArrow } from "@mui/icons-material";
import CustomAccordion from "@components/Accordion";

export default function Questions() {
  return (
    <div className="pt-10 max-w-6xl m-auto px-5">
      <h2 className="text-2xl lg:text-3xl font-semibold text-heading2 mb-8 text-center lg:text-left lg:p-7">
        Frequently asked questions
      </h2>

      <div className="bg-white">
        <div className="px-4 py-3 lg:w-9/12">
          <CustomAccordion 
            className="border-none bg-white"
            title={
              <div className="flex items-center">
                <label className="font-medium block">
                  Who qualifies to apply?
                </label>
              </div>
            }
            content={
              <p className="mt-4">
                Anyone in between the ages of 16 to 55 can apply. Applicants who are in between 16 - 18 should provide ONE guarantor.
              </p>
            }
          />
        </div>

        <div className="px-4 py-3 lg:w-9/12">
          <CustomAccordion 
            className="border-none bg-white"
            title={
              <div className="flex items-center">
                <label className="font-medium block">
                  How do I make payment?
                </label>
              </div>
            }
            content={
              <p className="mt-4">
                After the submission of pitch, there will be an option to pay a processing fee of Ghs 150.00
              </p>
            }
          />
        </div>

        <div className="px-4 py-3 lg:w-9/12">
          <CustomAccordion 
            className="border-none bg-white"
            title={
              <div className="flex items-center">
                <label className="font-medium block">
                  What do I need to participate in the challenge?
                </label>
              </div>
            }
            content={
              <p className="mt-4">
                Ensure that you have recorded a video pitch with clear audio, OR prepared a brief business pitch presentation (250 words) We welcome ideas that are feasible and have a good business model as well as a viable plan for success, indicate your investment expectation in Ghana Cedi and what you would use it for. Also, highlight output and type of business.
              </p>
            }
          />
        </div>

        <div className="px-4 py-3 lg:w-9/12">
          <CustomAccordion 
            className="border-none bg-white"
            title={
              <div className="flex items-center">
                <label className="font-medium block">
                  Can I apply if I have an idea?
                </label>
              </div>
            }
            content={
              <p className="mt-4">
                We welcome ideas that are feasible and have a good business framework as well as a viable plan for success.
              </p>
            }
          />
        </div>

        <div className="px-4 py-3 lg:w-9/12">
          <CustomAccordion 
            className="border-none bg-white"
            title={
              <div className="flex items-center">
                <label className="font-medium block">
                  How useful is the downloadable template?
                </label>
              </div>
            }
            content={
              <p className="mt-4">
                The guide helps you prepare your pitch document or video. It captures the important questions that helps you with coming up with your pitch submission.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
