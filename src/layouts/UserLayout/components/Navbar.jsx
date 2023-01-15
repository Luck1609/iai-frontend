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
          <li className="mx-5 py-3">Home</li>
          <li className="mx-5 py-3">About us</li>
          <li className="mx-5 py-3">FAQ</li>
          <li className="mx-5 py-3">Blog</li>
          <li className="mx-5 py-3">Contact us</li>
          <li className="mx-5 py-3">
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
