import React from "react";
import Input from "@components/Input";

export default function ApplicationForm3() {
  return (
    <>
      <Input
        name="profit"
        label="How much profit have you made so far "
        placeholder="Provide this as a month on month average, Then a total per year."
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="amount"
        label="How much investment are you looking for ?"
        placeholder="How much investment are you looking for ?"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="use"
        label="What will you use the investment for ?"
        placeholder="What will you spend the money on? Kindly discuss that which applies, Raw Materials ,"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="valuation"
        label="How much do you value your business ?"
        placeholder="How much do you value your business? "
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="platform"
        label="How did you hear about us?"
        placeholder="Facebook, Instagram, Twitter, LinkedIn, Referral (enter name), Search engines."
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />
    </>
  );
}