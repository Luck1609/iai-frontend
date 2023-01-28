import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LinkItem from "@components/Link";
import { images } from "@assets/img/images";
import Sidebar from "./Sidebar";
import { Btn } from "@components/Btn";

export default function Navbar() {
  const [switcBackground, setSwitcBackground] = useState(false)
  const { pathname } = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 88) setSwitcBackground(true);
      else setSwitcBackground(false);
    });
  });

  const apply = () => navigate("/apply")


  return (
    <nav
      className={`w-full flex justify-center fixed z-30 pb-1  ${
        switcBackground ? "bg-slate-50" : ""
      }`}
    >
      <div className="contained flex items-center">
        <LinkItem to="/home" className="grow">
          <img src={images.logo_red} alt="IAI logo" className="h-16 lg:h-20" />
        </LinkItem>

        <ul className="items-center hidden md:flex">
          {links(pathname).map(({ label, active, link }, index) => (
            <li className="mx-5" key={index.toString()}>
              <LinkItem
                url={link}
                className={`py-3 hover:text-red-500 
                  ${
                    active
                      ? "text-red-500"
                      : switcBackground || pathname === "/apply"
                      ? "text-black"
                      : "text-white"
                  } block font-medium
                `}
              >
                {label}
              </LinkItem>
            </li>
          ))}
          <li className="mx-5">
            <Btn content="Apply Now" className="bg-[#1C2BE5]" click={apply} />
          </li>
        </ul>
        
        
        <Sidebar switch={switcBackground} />
      </div>
    </nav>
  );
}


const links = (activePath) => ([
  {
    label: "Home",
    active: activePath.startsWith("home", 1),
    link: "/home"
  },
  {
    label: "About us",
    active: activePath.startsWith("about-us", 1),
    link: "/about-us"
  },
  {
    label: "FAQ",
    active: activePath.startsWith("faq", 1),
    link: "/faq"
  },
  {
    label: "Blog",
    active: activePath.startsWith("blogs", 1),
    link: "/blogs"
  },
  {
    label: "Contact us",
    active: activePath.startsWith("contact-us", 1),
    link: "/contact-us"
  },
])