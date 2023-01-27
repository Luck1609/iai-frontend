import React from "react";
import { Btn } from "@components/Btn";

export default function AboutInfo() {
  return (
    <div className="flex justify-center">
      <div className="w-full contained bg-[#FCF0F0] -mt-10 grid lg:grid-cols-2 rounded p-5 lg:p-16 gap-y-20 order-1 lg:order-1">
        <div className="self-center text-justify">
          <h2 className="text-2xl lg:text-3xl font-bold text-heading2 mb-5 text-center lg:text-left">
            About I Am Investible
          </h2>
          <p className="leading-7 lg:leading-10 text-md lg:text-lg mb-3">
            “I AM INVESTIBLE” is Samaritan Angels Limited flagship program
            focused on accelerating the growth of entrepreneurs and creating
            jobs in Ghana by providing access to Business Advisory Services,
            technical and financial support.
          </p>
          <p className="leading-7 lg:leading-10 text-md lg:text-lg mb-3">
            The aim is to provide Ghanaian entrepreneurs access to coaching,
            technical support and finance (grants when needed) of up to
            GHS50,000 to accelerate the growth of the beneficiary businesses.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-heading2 mb-5 mt-10 text-center lg:text-left">
            What are the key objectives for the iAi?
          </h2>

          <ol>
            <li className="text-md lg:text-lg mb-4 list-decimal pl-3">
              To empower Ghanaian entrepreneurs to grow by providing access to
              business development services, technical and financial support.
            </li>
            <li className="text-md lg:text-lg mb-4 list-decimal pl-3">
              Empower small and growing businesses to contribute to the economic
              development of Ghana by creating jobs
            </li>
            <li className="text-md lg:text-lg mb-4 list-decimal pl-3">
              Provide access to finance to support working capital needs of SMEs
            </li>
          </ol>
        </div>

        <div className="bg-iai-red bg-cover w-10/12  h-[239px] lg:h-[430px] self-center ml-[16%] order-2 lg:order-2"></div>

        <div className="bg-samaritan-red bg-cover w-10/12  h-[239px] lg:h-[430px] self-center mr-[16%] order-4 lg:order-3"></div>

        <div className="self-center lg:pr-8 text-justify order-3 lg:order-4">
          <h2 className="text-xl lg:text-3xl font-bold text-heading2 mb-5 text-center lg:text-left">About SAL</h2>
          <p className="leading-7 lg:leading-10 mb-3 text-md lg:text-lg">
            Samaritan Angels Ltd. is a Social Enterprise focused on accelerating
            the growth of small and medium enterprises in Ghana. Samaritan
            Angels Ltd achieves this through three platforms, namely
          </p>

          <ol>
            <li className="text-md lg:text-lg mb-4 list-decimal">
              Provision of small grants to entrepreneurs to support working
              capital needs
            </li>
            <li className="text-md lg:text-lg mb-4 list-decimal">
              Training and Mentorship support to build capacity and accelerate
              entrepreneurs growth
            </li>
            <li className="text-md lg:text-lg mb-4 list-decimal">
              Business Advisory Services and Coaching Support to improve
              business performance and competitiveness
            </li>
          </ol>

          <a href="https://samaritangroupgh.com/" className="" target="_blank">
            <Btn
              content="Visit SAL Website"
              variant="outlined"
              className="text-heading2 border-heading2 mt-8 h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
