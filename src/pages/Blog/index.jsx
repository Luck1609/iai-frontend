import { images } from '@assets/img/images'
import Hero from '@components/Hero'
import React from 'react'
import BlogCard from './BlogCard'

export default function Blog() {
  return (
    <div className="bg-[#FCF0F0] pb-16">
      <Hero />
    
      
      <div className="bg-[#FCF0F0] -mt-10 max-w-6xl m-auto rounded-xl pt-28 pb-16 grid gap-12">
        {
          posts.map((blog, index) => (
            <BlogCard 
              key={index.toString()} 
              {...blog}
            />
          ))
        }
      </div>
    </div>
  )
}


const posts = [
  {
    img: images.baker,
    title: "50 Signs You might Be an Entrepreneur"
  },
  {
    img: images.blog_2,
    title: "5 Reasons an angel investor will walk away from your deal"
  },
  {
    img: images.handshake,
    title: "6 ways to get your business “Investor Ready”"
  }
]