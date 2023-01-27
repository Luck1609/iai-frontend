import React from "react";
import { Edit, Post, User } from '@assets/img/svg'
import LinkItem from "@components/Link";

export default function BlogCard({ img, title, name, content }) {
  return (
    <LinkItem url="/blogs" className="flex items-center text-heading2 font-semibold">
      <div className="max-w-5xl w-full mx-auto rounded-xl overflow-hidden">
        <div className="w-11/12 mx-auto lg:w-full bg-white flex items-center flex-col lg:flex-row rounded-lg overflow-hidden">
          <img src={img} alt="Blog cover" className="w-full lg:w-[280px]" />

          <div className="p-5 text-xs lg:text-[14px] lg:p-10 lg:w-4/6 flex flex-col gap-2 lg:gap-5">
            <div className="flex text-slate-400 mb-3.5">
              <span className="flex mr-5 items-center"><User className="mr-2 h-5 w-5" /> Invest on</span>
              <span className="flex items-center"><Edit className="mr-2 h-5 w-5" /> December 29, 2022</span>
            </div>

            <h3 className="font-medium block mb-2 text-heading text-xl lg:text-4xl">
              {title}
            </h3>

            <div className="flex items-center">
              <Post className="h-4 w-4 mr-2" /> Read Blog
            </div>
          </div>
        </div>
      </div>
    </LinkItem>
  );
}