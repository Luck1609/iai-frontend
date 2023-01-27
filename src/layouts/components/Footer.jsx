import React from "react";
import { images } from "@assets/img/images";
import LinkItem from "@components/Link";
import {
  Mail,
  People,
  Call,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "@assets/img/svg";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-default-blue text-white py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-4 gap-8 mt-10">
        <div className="w-full">
          <img src={images.logo} alt="IAI logo" className="mx-auto lg:mx-0 w-44" />
        </div>

        <div className="w-full lg:col-span-3 grid lg:grid-cols-2 gap-x-8 gap-y-5">
          <div className="px-5 lg:p-0">
            <h4 className="text-3xl font-semibold mb-7">Contact us</h4>
            <ul>
              <li className="">
                <a href="tel:02484567900" className="flex py-1.5">
                  <span className="font-semibold flex items-center w-28 lg:w-36">
                    <Call className="mr-[5px] lg:mr-[16px]" /> Phone:
                  </span>

                  <label className="">02484567900</label>
                </a>
              </li>
              <li className="">
                <a
                  href="mailto:inquires@IamInvestible.com"
                  className="flex py-1.5"
                >
                  <span className="font-semibold flex items-center w-28 lg:w-36">
                    <Mail className="mr-[8px] lg:mr-[20px]" /> Email:
                  </span>

                  <label className="">inquiries@iaminvestible.com</label>
                </a>
              </li>
              <li className="">
                <a href="mailto:info@IamInvestible.com" className="flex py-1.5">
                  <span className="font-semibold flex items-center lg:mr-0 w-28 lg:w-36">
                    <People className="h-7 -ml-0.5 mr-[5px] lg:mr-[14px]" /> Support:
                  </span>

                  <label className="">info@iaminvestible.com</label>
                </a>
              </li>
            </ul>

          </div>

          
          <div className="px-5 lg:p-0">
            <h4 className="text-3xl font-semibold mb-7">Quick Links</h4>
            <ul>
              <li className="">
                <LinkItem url="/apply" className="flex py-1.5">
                  <label className="">Submit an application</label>
                </LinkItem>
              </li>
              <li className="">
                <LinkItem url="/home" className="flex py-1.5">
                  <label className="">Sign up for mentorship</label>
                </LinkItem>
              </li>
              <li className="">
                <a
                  href="mailto:info@iaminvestible.com"
                  className="flex py-1.5 cursor-pointer"
                >
                  <label className="">Contact an administrator</label>
                </a>
              </li>
            </ul>
          </div>


          <ul className="mt-10 px-5 lg:px-0 w-10/12 mx-auto flex items-center justify-between">
            <li className="">
              <a href="https://www.facebook.com/iaminvestible" target="_blank">
                <Facebook className="h-9" />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.instagram.com/iaminvestible_official/"
                target="_blank"
              >
                <Instagram className="h-9" />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.youtube.com/@iaminvestibleGH"
                target="_blank"
              >
                <Youtube className="h-7" />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.linkedin.com/company/iaminvestible/"
                target="_blank"
              >
                <Linkedin className="h-9" />
              </a>
            </li>
          </ul>
        </div>


        <label className="block text-center w-full lg:col-span-4 uppercase text-sm mt-10 font-medium">
          2022 Samaritan Angels Ltd. | ALL RIGHTS RESERVED SiTE credit
        </label>
      </div>
    </footer>
  );
}
