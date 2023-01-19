import { Btn } from "@components/Btn";
import React from "react";

export default function AboutInfo() {
  return (
    <div className="flex justify-center">
      <div className="w-full container bg-[#FCF0F0] -mt-10 grid grid-cols-2 rounded p-16 gap-y-10">
        <div className="self-center">
          <h2 className="text-4xl font-bold text-heading2 mb-5">
            About I Am Investible
          </h2>
          <p className="text-leading-10 mb-3">
            Over USD 7 Million Invested so far in Ghanaian brands.
          </p>
          <p className="text-leading-10 mb-3">
            Samaritan Angels Ltd. (SAL) seeks to be a brand that provides
            financial assistance for Startups & SMEs through its investment
            packages.
          </p>
          <p className="text-leading-10">
            I Am Investible is one of the packages from Samaritan Angels
            provides funding for entrepreneurs. IAI aims to be top-of-mind for
            startups who wish to receive funding.
          </p>
        </div>

        <div className="bg-tailor bg-cover w-9/12 h-[411px] self-center ml-[16%]"></div>

        <div className="self-center">
          <h2 className="text-4xl font-bold text-heading2 mb-5">
            About Samaritan Angels Limited
          </h2>
          <p className="text-leading-10 mb-3">
            Over USD 7 Million Invested so far in Ghanaian brands.
          </p>
          <p className="text-leading-10 mb-3">
            Samaritan Angels Ltd. (SAL) seeks to be a brand that provides
            financial assistance for Startups & SMEs through its investment
            packages.
          </p>
          <p className="text-leading-10">
            I Am Investible is one of the packages from Samaritan Angels
            provides funding for entrepreneurs. IAI aims to be top-of-mind for
            startups who wish to receive funding.
          </p>

          <a href="https://samaritangroupgh.com/" className="" target="_blank">
            <Btn
              content="Visit Sal's Website"
              variant="outlined"
              className="text-heading2 border-heading2 mt-8 h-10"
            />
          </a>
        </div>

        <div className="bg-lady bg-cover w-10/12 h-[430px] self-center ml-[16%]"></div>
      </div>
    </div>
  );
}
