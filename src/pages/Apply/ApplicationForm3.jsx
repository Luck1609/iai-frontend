import React from "react";
import Input from "@components/Input";

export default function ApplicationForm3() {
  return (
    <>
      <Input
        name="profit"
        label="how much sales have you made in the last year or two (2)?"
        placeholder="Provide this as a month on month average, Then a total per year."
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="investment"
        label="How much investment are you looking for ?"
        placeholder="How much investment are you looking for ?"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="investmentUsageIdea"
        label="What will you use the investment for ?"
        placeholder="What will you spend the money on? Kindly discuss that which applies, Raw Materials ,"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="employees"
        label="How many employees do you have included the owners?"
        placeholder="Business employees (staff)"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="hearAboutUS"
        label="How did you hear about us?"
        placeholder="Facebook, Instagram, Twitter, LinkedIn, Referral (enter name), Search engines."
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />
    </>
  );
}
