import React from "react";
import { Edit, Post, User } from "@assets/img/svg";
import Link from "@components/Link";

export default function BlogPostCard({ img, title }) {
  return (
    <Link className="w-full">
      <img src={img} alt="" className="w-full rounded-tl-[100px]" />
      <div className="flex text-slate-400 my-2">
        <span className="flex mr-5 text-[14px]">
          <User className="mr-2 h-5 w-5" /> Invest on
        </span>
        <span className="flex text-[14px]">
          <Edit className="mr-2 h-5 w-5" /> December 29, 2022
        </span>
      </div>

      <h3 className="text-3xl font-semibold text-heading mb-5">{title}</h3>

      <span className="flex text-[14px] text-primary items-center">
        <Post className="mr-2 h-5 w-5" /> Read Blog
      </span>
    </Link>
  );
}
