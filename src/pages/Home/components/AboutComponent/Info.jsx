import React from "react";
import LinkItem from "@components/Link";

export default function Info() {
  return (
    <div className="text-white text-center lg:text-left px-5 lg:px-0 mb-14">
      <h3 className="text-xl lg:text-3xl font-semibold mb-5 uppercase">
        What is I Am Investible
      </h3>

      <p className="leading-9 mb-4">
        I Am Investible is an initiative from Samaritan Angels Limited focused
        on accelerating the growth of entrepreneurs and creating jobs in Ghana.
      </p>

      <p className="leading-9 mb-4">
        The aim is to provide Ghanaian entrepreneurs and start-ups with
        Financial Assistance, Mentorship and Technical Support to accelerate the
        growth of the beneficiary businesses.
      </p>

      <p className="leading-9">
        I Am Investible provides funding and mentorship to its winners monthly.
      </p>

      <LinkItem to="/home" className="font-medium block mt-5">Read More</LinkItem>
    </div>
  );
}
