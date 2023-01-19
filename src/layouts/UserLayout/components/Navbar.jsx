import React, { useState, useEffect } from "react";
import { Btn } from "@components/Btn";
import Link from "@components/Link";
import { images } from "@assets/img/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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
    <nav className={`w-full flex justify-center fixed z-20 h-[90px] ${switcBackground ? "bg-slate-50" : ""}`}>
      <div className="container flex">
        <Link to="/" className="grow">
          <img src={images.logo_red} alt="IAI logo" className="h-20" />
        </Link>
      
        <ul className="flex items-center">
          {
            links(pathname).map(({ label, active, link }, index) => (
              <li className="mx-5" key={index.toString()}>
                <Link  url={link} className={`py-3 hover:text-red-500 
                  ${ active 
                    ? "text-red-500" 
                    : switcBackground 
                      ? "text-black" 
                      : "text-white"
                  } block font-medium
                `}>{label}</Link>
              </li>
            ))
          }
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