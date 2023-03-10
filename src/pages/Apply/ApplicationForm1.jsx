import React from "react";
import Input from "@components/Input";
import PhoneNumberInput from "@components/PhoneNumberInput";
import SelectField from "@components/Select";

export default function () {
  return (
    <>
      <Input
        name="name"
        label="Name"
        placeholder="Full name"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      {/* <SelectField
        name="age"
        label="Select Age"
        options={[
          { label: "15 - 25yrs", value: "15-25yrs" },
          { label: "26 - 35yrs", value: "26-35yrs" },
          { label: "35 - 50yrs", value: "35-50yrs" },
          { label: "50+ yrs", value: "50+yrs" },
        ]}
        className="border-b border-input-border rounded-none"
      /> */}

      <SelectField 
        name="gender"
        label="Select Gender"
        options={[
          {label: "Male", value: "Male"},
          {label: "Female", value: "Female"},
          {label: "Both", value: "Both"},
        ]}
        className="pl-5"
      />

      <Input
        name="email"
        label="Email"
        placeholder="Enter email"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="nationalIdCard"
        labelClassName="flex items-center justify-between block w-full"
        label={
          <>
            <span className="text-sm lg:text-normal">National ID Card</span>
            <span className="text-[#0000007f] text-xs lg:text-normal">
              *Ghana card preferred*
            </span>
          </>
        }
        placeholder="GHA-000000000-0"
        className="border-b border-input-border rounded-none"
      />

      <PhoneNumberInput
        name="phone"
        label="Phone Number"
        subClassName="border-b border-input-border rounded-none w-full focus:outline-none p-2.5"
      />
    </>
  );
}
