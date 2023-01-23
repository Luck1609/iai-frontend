import React from "react";
import { Building, Buildings, Persons, UserOcta } from "@assets/img/svg";

export default function Stats() {
  return (
    <div className="row-span-2 p-20 grid grid-cols-2 grid-rows-2 relative before:absolute before:w-8 before:h-8 before:bg-white before:rounded-full before:top-[345px] before:left-[304px] before:border-8 before:border-default-red">
      <div className="w-full flex items-center justify-center text-white border-r border-white border-b">
        <div className="text-center">
          <UserOcta className="m-auto mb-4" />
          <label className="font-medium">Yearly Investment</label>
          <span className="text-3xl block mt-10">GH₵ 1.4m</span>
        </div>
      </div>

      <div className="w-full flex  items-center justify-center text-white border-l border-white border-b">
        <div className="text-center">
          <Persons className="m-auto mb-4" />
          <label className="font-medium">Entrepreneurs Trained</label>
          <span className="text-3xl block mt-10">2000</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-white border-r border-white border-t">
        <div className="text-center">
          <Building className="m-auto mb-4" />
          <label className="font-medium">Enterprises Supported</label>
          <span className="text-3xl block mt-10">2000</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-white border-l border-white border-t">
        <div className="text-center">
          <Buildings className="m-auto mb-4" />
          <label className="font-medium">Jobs Supported</label>
          <span className="text-3xl block mt-10">7500</span>
        </div>
      </div>
    </div>
  );
}
