import React from "react";
// import Link from "@components/Link";

export default function ContactInfo() {
  return (
    <div className="bg-[#FCF0F0] -mt-10 max-w-6xl m-auto rounded-xl">
      <h2 className="text-3xl font-semibold text-heading2 mb-8 p-7 text-center lg:text-left">
        Please feel free to contact us if you have a question or just want to
        say hello!
      </h2>

      <div className="bg-white p-5 lg:px-20 flex items-center flex-col lg:flex-row w-full rounded-3xl">
        <div className="basis-2/5">
          <div className="h-[264px] w-[295px] bg-lady bg-cover" />
        </div>

        <div className="w-full lg:basis-4/5 lg:pl-16 pt-10 lg:pt-0">
          <h2 className="text-3xl text-heading font-bold mb-7 text-center lg:text-left">
            Support Center
          </h2>
          <ul>
            <li className="">
              <a href="tel:+233257958570" className="flex py-1.5 font-medium">
                <span className="font-semibold flex items-center w-24">
                  Phone:
                </span>

                <label className="">+233 (025) 795-8570</label>
              </a>
            </li>
            <li className="">
              <a
                href="mailto:Inquires@IamInvestible.com"
                className="flex py-1.5 font-medium"
              >
                <span className="font-semibold flex items-center w-24">
                  Email:
                </span>
                <label className="">Inquires@IamInvestible.com</label>
              </a>
            </li>
            <li className="">
              <a
                href="mailto:info@IamInvestible.com"
                className="flex py-1.5 font-medium"
              >
                <span className="font-semibold flex items-center w-24">
                  Support:
                </span>

                <label className="">Info@IamInvestible.com</label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
