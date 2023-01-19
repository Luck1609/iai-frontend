import React from 'react'
import { images } from '@assets/img/images'
import Link from "@components/Link";
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
    <footer className="w-full flex justify-center bg-default-blue text-white py-20">
      <div className="w-full max-w-5xl grid grid-cols-4 gap-8">
        <div className="w-full">
          <img src={images.logo} alt="IAI logo" className="w-44" />
        </div>

        <div className="col-span-2 pl-8">
          <h4 className="text-3xl font-semibold mb-7">Contact us</h4>
          <ul>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <span className="font-semibold flex items-center w-44">
                  <Call className="mr-3.5" /> Phone:
                </span>

                <label className="">02484567900</label>
              </Link>
            </li>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <span className="font-semibold flex items-center w-44">
                  <Mail className="mr-3.5" /> Email:
                </span>

                <label className="">Inquires@IamInvestible.com</label>
              </Link>
            </li>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <span className="font-semibold flex items-center w-44">
                  <People className="mr-3.5" /> Support:
                </span>

                <label className="">Info@IamInvestible.com</label>
              </Link>
            </li>
          </ul>

          <ul className="mt-10 flex items-center w-2/4 justify-between">
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

        <div className="w-full ">
          <h4 className="text-3xl font-semibold mb-7">Quick Links</h4>
          <ul>
            <li className="">
              <Link url="/apply" className="flex py-1.5">
                <label className="">Submit An Application</label>
              </Link>
            </li>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <label className="">Sign up for mentorship</label>
              </Link>
            </li>
            <li className="">
              <a href="mailto:info@iaminvestible.com" className="flex py-1.5 cursor-pointer">
                <label className="">Contact An Administrator</label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
