import React from "react";
import Hero from "@components/Hero";
import FaqInfo from "./FaqInfo";
import Questions from "./Questions";

export default function Faq() {
  return (
    <div className="bg-[#FCF0F0] pb-16">
      <Hero />
      <FaqInfo />
      <Questions />
    </div>
  );
}
