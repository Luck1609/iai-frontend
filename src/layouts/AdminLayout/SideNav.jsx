import React from 'react'
import { Admin, Applications, Approved, Home, Management, News, Payment, Settings, Updates, User, Users } from '@assets/img/svg'
import Link from '@components/Link'
import { useLocation } from 'react-router-dom'
import { images } from '@assets/img/images'

export default function SideNav() {
  const { pathname } = useLocation()

  return (
    <aside className="h-screen w-[200px] bg-[#1E1E1E]">
      <img src={images.logo_2} alt="logo" className="h-16 ml-3 mb-5 rounded-b-lg" />
      <ul className="w-full">
        {
          links(pathname).map(({label, link, icon: Icon}, index) => (
            <li className="w-full" key={index.toString()}>
              <Link url={`/admin/${link}`} className={`flex items-center p-3 pl-5 ${pathname.startsWith(link, 7) ? "bg-[#282828] text-white" : "text-admin-text"}`}>
                <Icon className="h-4 w-4 mr-3" active={pathname.startsWith(link, 7)} /> { label }
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}


const links = (url) => ([
  {
    label: "Dashboard",
    link: "dashboard",
    icon: Home
  },
  {
    label: "Applications",
    link: "applications",
    icon: Applications
  },
  {
    label: "Approvals",
    link: "approvals",
    icon: Approved
  },
  {
    label: "Payments",
    link: "payments",
    icon: Payment
  },
  {
    label: "L.  management",
    link: "management",
    icon: Management
  },
  {
    label: "Updates",
    link: "updates",
    icon: Updates
  },
  {
    label: "News",
    link: "news",
    icon: News
  },
  {
    label: "Users",
    link: "users",
    icon: Users
  },
  {
    label: "Admins",
    link: "admins",
    icon: Admin
  },
  {
    label: "Settings",
    link: "settings",
    icon: Settings
  },
])