import React from "react";
import { Btn } from "@components/btn";
import Link from "@components/link";
import { images } from "@assets/img/images";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center fixed">
      <div className="container flex">
        <Link to="/" className="grow">
          <img src={images.logo_red} alt="IAI logo" className="h-20" />
        </Link>
      
        <ul className="flex items-center">
          <li className="mx-5">
            <Link url="/" className="py-3 block text-white">Home</Link>
          </li>
          <li className="mx-5">
            <Link url="/about-us" className="py-3 block text-white">About us</Link>
          </li>
          <li className="mx-5">
            <Link url="/faq" className="py-3 block text-white">FAQ</Link>
          </li>
          <li className="mx-5">
            <Link url="/blog" className="py-3 block text-white">Blog</Link>
          </li>
          <li className="mx-5">
            <Link url="/contact-us" className="py-3 block text-white">Contact us</Link>
          </li>
          <li className="mx-5">
            <Btn content="Apply Now" className="bg-[#1C2BE5]" />
          </li>
          {/* <li className="mx-5 py-3">
            <Btn content="Apply Now" />
          </li> */}
        </ul>
      </div>

    </nav>
  );
}
