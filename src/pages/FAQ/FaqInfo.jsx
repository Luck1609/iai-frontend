import React from "react";
import Helper from "@helpers/index";

export default function FaqInfo() {
  return (
    <div className="bg-[#FCF0F0] -mt-10 max-w-6xl m-auto rounded-xl">
      <h2 className="text-3xl font-semibold text-heading2 mb-8 p-10">
        Participants Criteria
      </h2>

      <div className="py-10 p-5 lg:p-10 rounded-xl bg-white mx-5 lg:mx-0">
        <h2 className="text-default-red font-semibold text-2xl lg:text-3xl text-center lg:text-left">How does a business apply for iAi?</h2>
        <p className="mt-5">To apply please follow this simple 5 step process.</p>

        <p className="p-4">
          <label className="font-semibold text-md">Step 1:</label>

          <div className="">Visit <a url="https://www.iaminvestible.com" className="text-blue-500">www.iaminvestible.com </a>, click apply</div>
        </p>

        <p className="p-4">
          <label className="font-semibold text-md">Step 2:</label>

          <div className="">Download the guide <a href={Helper.env.VITE_DOWNLOAD_GUIDE} target="_blank" className="text-blue-500">click here to download</a></div>
        </p>

        <p className="p-4">
          <label className="font-semibold text-md">Step 3:</label>

          <div className="">Prepare a 250-word pitch of your business or record a 2-minute video of yourself telling us about your business</div>
        </p>

        <p className="p-4">
          <label className="font-semibold text-md">Step 4:</label>

          <div className="">Fill the application form and upload your pitch or video</div>
        </p>

        <p className="p-4">
          <label className="font-semibold text-md">Step 5:</label>

          <div className="">Pay your processing fee and submit</div>
        </p>
      </div>
{/* 
      <div className="grid gap-5">
        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">
            Incorporation
          </label>
          <p className="">
            Companies with more than one owner should indicate one lead and
            attend with team once they qualify for the stage.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">
            Sole Proprietor
          </label>
          <p className="">
            Sole proprietor businesses are welcome to contest for the funding
            for their businesses.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">
            How Much Is Invested?
          </label>
          <p className="">
            Total investment requirement should be up to ₵50,000 per
            organization.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">
            Any Resources To Help?
          </label>
          <p className="">
            IAI Provides a one-day bootcamp for shortlisted businesses who are
            found to be eligible in the first stage of the competition.
          </p>
        </div>
      </div> */}
    </div>
  );
}
