import React from "react";
import { Btn } from "@components/btn";
import Link from "@components/link";
import { images } from "@assets/img/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const apply = () => navigate("/apply")

  return (
    <nav className="w-full flex justify-center fixed">
      <div className="container flex">
        <Link to="/" className="grow">
          <img src={images.logo_red} alt="IAI logo" className="h-20" />
        </Link>
      
        <ul className="flex items-center">
          <li className="mx-5">
            <Link  url="/home" className={`py-3 hover:text-red-text ${pathname === "/apply" ? "text-black" : "text-white"} ${pathname.startsWith("home", 1) ? "text-red-500" : "text-white"} block font-medium`}>Home</Link>
          </li>
          <li className="mx-5">
            <Link  url="about-us" className={`py-3 hover:text-red-text ${pathname === "/apply" ? "text-black" : "text-white"} ${pathname.startsWith("about-us", 1) ? "text-red-500" : "text-white"} block font-medium`}>About us</Link>
          </li>
          <li className="mx-5">
            <Link  url="faq" className={`py-3 hover:text-red-text ${pathname === "/apply" ? "text-black" : "text-white"} ${pathname.startsWith("faq", 1) ? "text-red-500" : "text-white"} block font-medium`}>FAQ</Link>
          </li>
          <li className="mx-5">
            <Link  url="blogs" className={`py-3 hover:text-red-text ${pathname === "/apply" ? "text-black" : "text-white"} ${pathname.startsWith("blogs", 1) ? "text-red-500" : "text-white"} block font-medium`}>Blog</Link>
          </li>
          <li className="mx-5">
            <Link  url="contact-us" className={`py-3 hover:text-red-text ${pathname === "/apply" ? "text-black" : "text-white"} ${pathname.startsWith("contact-us", 1) ? "text-red-500" : "text-white"} block font-medium`}>Contact us</Link>
          </li>
          {/* <li className="mx-5">
            <NavLink style={({isActive}) => isActive ? {color: "#FF0000"} : {color: "white"}}  url="/" className={"py-3 block font-medium"}>Home</NavLink>
          </li>
          <li className="mx-5">
            <NavLink style={({isActive}) => isActive ? {color: "#FF0000"} : {color: "white"}}  url="about-us" className={"py-3 block font-medium"}>About us</NavLink>
          </li>
          <li className="mx-5">
            <NavLink style={({isActive}) => isActive ? {color: "#FF0000"} : {color: "white"}}  url="faq" className={"py-3 block font-medium"}>FAQ</NavLink>
          </li>
          <li className="mx-5">
            <NavLink style={({isActive}) => isActive ? {color: "#FF0000"} : {color: "white"}}  url="blog" className={"py-3 block font-medium"}>Blog</NavLink>
          </li>
          <li className="mx-5">
            <NavLink style={({isActive}) => isActive ? {color: "#FF0000"} : {color: "white"}}  url="contact-us" className={"py-3 block font-medium"}>Contact us</NavLink>
          </li> */}
          <li className="mx-5">
            <Btn content="Apply Now" className="bg-[#1C2BE5]" click={apply} />
          </li>
          {/* <li className="mx-5 py-3">
            <Btn content="Apply Now" />
          </li> */}
        </ul>
      </div>

    </nav>
  );
}
