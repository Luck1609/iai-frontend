import React from "react";
import Input from "@components/Input";
import PhoneNumberInput from "@components/phone_number_input";

export default function () {
  return (
    <>
      <Input
        name="fullname"
        label="Name"
        placeholder="Firstname & lastname"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="age"
        label="Age"
        placeholder="Select age"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="email"
        label="Email"
        placeholder="Enter email"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="nationalId"
        labelClassName="flex justify-between block w-full"
        label={
          <>
            <span>National ID Card</span>
            <span className="text-[#0000007f]">*Ghana card preferred*</span>
          </>
        }
        placeholder="GHA-000000000-0"
        // constainerClass=""
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
