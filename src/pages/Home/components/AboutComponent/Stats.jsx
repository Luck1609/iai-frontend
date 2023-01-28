import React from "react";
import CountUp from 'react-countup';
import { Building, Buildings, Persons, UserOcta } from "@assets/img/svg";

export default function Stats() {
  return (
    <div className="lg:row-span-2 lg:p-20 grid grid-cols-2 grid-rows-2 relative before:absolute before:w-8 before:h-8 before:bg-white before:rounded-full before:top-[46%] before:left-[45.5%]  lg:before:top-[48%] lg:before:left-[47.5%] before:border-8 before:border-default-red">
      <div className="w-full flex items-center justify-center text-white border-r border-white border-b">
        <div className="text-center p-3 lg:p-0  lg:w-4/5">
          <UserOcta className="m-auto mb-4" />
          <label className="font-medium pl-3">Projected Yearly Investment</label>
          <span className="text-xl lg:text-3xl block mt-10">GH₵ 3m</span>
        </div>
      </div>

      <div className="w-full flex  items-center justify-center text-white border-l border-white border-b">
        <div className="text-center p-3 lg:p-0">
          <Persons className="m-auto mb-4" />
          <label className="font-medium">Projected Enterprises to be Trained</label>
          <CountUp end={2000} duration={2} className="text-xl lg:text-3xl block mt-10" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-white border-r border-white border-t">
        <div className="text-center p-3 lg:p-0">
          <Building className="m-auto mb-4" />
          <label className="font-medium">Projected Enterprises to be Supported</label>
          <CountUp end={2000} duration={2} className="text-xl lg:text-3xl block mt-10" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-white border-l border-white border-t">
        <div className="text-center p-3 lg:p-0">
          <Buildings className="m-auto mb-4" />
          <label className="font-medium pl-3">Projected Jobs to be Supported</label>
          <CountUp end={20000} duration={7.5} className="text-xl lg:text-3xl block mt-10" />
        </div>
      </div>
    </div>
  );
}
