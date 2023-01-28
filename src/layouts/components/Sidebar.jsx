import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Menu, Close } from "@mui/icons-material";
import { Btn } from "@components/Btn";
import LinkItem from "@components/Link";
import { images } from "@assets/img/images";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const [state, setState] = React.useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => setState(!state);

  const links = [
    {label: "Home", url: "/home"},
    {label: "About Us", url: "/about-us"},
    {label: "FAQ", url: "/faq"},
    {label: "Blogs", url: "/blogs"},
    {label: "Contact us", url: "/contact-us"},
    {label: "Apply Now", url: "/apply"},
  ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <ul>
        <li className="flex items-center p-3 justify-between">
          <img src={images.logo} alt="logo" className="h-10 bg-default-blue p-2 rounded" />

          <Close className="text-slate-500" onClick={toggleDrawer} />
        </li>
        {
          links.map(({label, url}, index) => (
            <li className="w-full text-center" key={index.toString()}>
              <LinkItem url={url} className={`p-2 block ${pathname.startsWith(url) ? "text-red-text" : "text-slate-500"}`}>{label}</LinkItem>
            </li>
          ))
        }
      </ul>
    </Box>
  );

  return (
    <div>
      <>
        <Btn 
          content={<Menu />}
          className="bg-transparent text-white btn p-2 hover:bg-slate-100 hover:bg-opacity-20 lg:hidden"
          click={toggleDrawer}
        />

        <Drawer
          open={state}
          onClose={toggleDrawer}
        >
          {list()}
        </Drawer>
      </>
    </div>
  );
}
