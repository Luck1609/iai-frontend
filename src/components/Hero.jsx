import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Hero({ title = "" }) {
  const { pathname } = useLocation();

  return (
    <div className={`w-full flex justify-center items-center h-60 lg:h-96 ${["/about-us", "/blogs"].includes(pathname) ? "bg-market" : "bg-staff"} bg-cover`}>
      <h1 className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left">
        {pathname === "/about-us" ? "About us" : ""}
        {pathname === "/blogs" ? "See what's new in our blog" : ""}
        {title}
      </h1>
    </div>
  )
}
