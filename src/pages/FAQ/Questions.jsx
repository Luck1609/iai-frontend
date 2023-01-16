import React from "react";
import { PlayArrow } from "@mui/icons-material";

export default function Questions() {
  return (
    <div className="pt-10 max-w-6xl m-auto px-5">
      <h2 className="text-3xl font-semibold text-heading2 mb-8 p-7">
        Frequently asked questions
      </h2>

      <div className="bg-white">
        <div className="p-4 w-9/12">
          <div className="flex items-center">
            <PlayArrow className="text-primary mr-3" />
            <label className="font-medium block">
              What might be the reason why I was not contacted?
            </label>
          </div>

          <p className="mt-4">
            If you have not seen your name or business name in the waiting list,
            the likelihood is that you did not make it past the eligibility
            criteria required.
          </p>
        </div>

        <div className="p-4 w-9/12">
          <div className="flex items-center">
            <PlayArrow className="text-primary mr-3" />
            <label className="font-medium block">
              How many times can I apply for the I Am Investible Challenge?
            </label>
          </div>

          <p className="mt-4">
            You can apply for the challenge over and over again. However, it is
            advised that you ensure that you have reviewed your submitted video,
            investment expectation and output, business model, learn more about
            your current market and satisfy getting the full details and proof
            of the figures you mention.
          </p>
        </div>

        <div className="p-4 w-9/12">
          <div className="flex items-center">
            <PlayArrow className="text-primary mr-3" />
            <label className="font-medium block">
              What do I need to participate in the challenge?
            </label>
          </div>

          <p className="mt-4">
            Ensure that you have recorded a video pitch with clear audio, or
            prepare a brief business pitch presentation, indicate your
            investment expectation and what you would use it for. Also,
            highlight output and business model.
          </p>
        </div>

        <div className="p-4 w-9/12">
          <div className="flex items-center">
            <PlayArrow className="text-primary mr-3" />
            <label className="font-medium block">
              Can I apply if I have an idea?
            </label>
          </div>

          <p className="mt-4">
            We welcome ideas that are feasible and have a good business model as
            well as a viable plan for success.
          </p>
        </div>

        <div className="p-4 w-9/12">
          <div className="flex items-center">
            <PlayArrow className="text-primary mr-3" />
            <label className="font-medium block">
              How useful is the downloadable template?
            </label>
          </div>

          <p className="mt-4">
            The template serves as a guide to help you prepare your pitch
            document or video. It captures the important questions that help
            with decision making.
          </p>
        </div>
      </div>
    </div>
  );
}
