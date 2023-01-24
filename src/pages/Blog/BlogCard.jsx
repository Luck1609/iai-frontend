import React from "react";
import { Edit, Post, User } from '@assets/img/svg'
import LinkItem from "@components/Link";

export default function BlogCard({ img, title, name, content }) {
  return (
    <LinkItem url="/blogs" className="flex items-center text-heading2 font-semibold">
      <div className="max-w-5xl w-full mx-auto rounded-xl overflow-hidden">
        <div className="w-full bg-white flex items-center">
          <img src={img} alt="Judge" className="w-[280px]" />

          <div className="p-10 w-4/6">
            <div className="flex text-slate-400 mb-3.5">
              <span className="flex mr-5 text-[14px]"><User className="mr-2 h-5 w-5" /> Invest on</span>
              <span className="flex text-[14px]"><Edit className="mr-2 h-5 w-5" /> December 29, 2022</span>
            </div>

            <h3 className="font-medium block mb-2 text-heading text-4xl">
              {title}
            </h3>

              <Post className="h-4 w-4 mr-2" /> Read Blog
          </div>
        </div>
      </div>
    </LinkItem>
  );
}