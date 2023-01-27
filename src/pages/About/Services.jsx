import React from "react";
import { MoneySend, People, PeopleOutline, UserCheck } from "@assets/img/svg";

export default function Services() {
  return (
    <div className="py-5 max-w-5xl m-auto px-5">
      <h2 className="text-4xl font-bold mb-8 text-heading2 col-span-4 text-center">
        Our Services
      </h2>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5 gap-y-3">
        <div className="w-full p-8 bg-white form-shadow flex flex-col lg:flex-row gap-4 rounded">
          <div className="w-16 h-16 mx-auto lg:mx-0">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow ">
            <label className="font-semibold text-lg text-center lg:text-left w-full block">Financial support</label>
            <p className="leading-8 text-justify">
              Access to finance (small grants and finance facilitation) to enable SGB's become investor ready and support working capital needs
            </p>
          </div>
        </div>

        <div className="w-full p-8 bg-white form-shadow flex flex-col lg:flex-row gap-4 rounded">
          <div className="w-16 h-16 mx-auto lg:mx-0">
            <PeopleOutline className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg text-center lg:text-left w-full block">
              Mentorship & Coaching
            </label>
            <p className="leading-8">
              Offer training and mentorship support to accelerate growth of enterprises.
            </p>
          </div>
        </div>

        <div className="w-full p-8 bg-white form-shadow flex flex-col lg:flex-row gap-4 rounded lg:col-span-2">
          <div className="w-16 h-16 mx-auto lg:mx-0">
            <UserCheck className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg text-center lg:text-left w-full block">Business Advisory Services</label>
            <p className="leading-8">
              Business advisory services and coaching support to entrepreneurs to improve competitiveness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
