import React from "react";
import { MoneySend } from "@assets/img/svg";

export default function Services() {
  return (
    <div className="py-5 max-w-5xl m-auto">
      <h2 className="text-4xl font-bold mb-8 text-heading2 col-span-4 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-5 gap-y-3">
        <div className="w-full p-8 bg-white form-shadow flex gap-4">
          <div className="w-16 h-16">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg">Financial support</label>
            <p className="leading-8">
              Access to finance (small grants and finance facilitation) to enable SGB's become investor ready and support working capital needs
            </p>
          </div>
        </div>

        <div className="w-full p-8 bg-white form-shadow flex gap-4">
          <div className="w-16 h-16">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg">
              Mentorship & Coaching
            </label>
            <p className="leading-8">
              Offer training and mentorship support to accelerate growth of enterprises.
            </p>
          </div>
        </div>

        <div className="w-full p-8 bg-white form-shadow flex gap-4 col-span-2">
          <div className="w-16 h-16">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg">Business Advisory Services</label>
            <p className="leading-8">
              Business advisory services and coaching support to entrepreneurs to improve competitiveness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
