import React from 'react'
import { images } from '@assets/img/images'
import Link from '@components/link'
import { Mail, People, Call } from '@assets/img/svg'

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
        </div>

        
        <div className="w-full ">
          <h4 className="text-3xl font-semibold mb-7">Quick Links</h4>
          <ul>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <label className="">Submit An Application</label>
              </Link>
            </li>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <label className="">Sign up for mentorship</label>
              </Link>
            </li>
            <li className="">
              <Link url="/" className="flex py-1.5">
                <label className="">Contact An Administrator</label>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
