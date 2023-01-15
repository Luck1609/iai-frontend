import { images } from '@assets/img/images'
import React from 'react'
import BlogPostCard from './BlogPostCard'

export default function BlogPostComponent() {
  return (
    <div className="flex justify-center py-16">
      <div className="max-w-6xl grid grid-cols-3 gap-8">
        <div className="col-span-3 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-default-red">Our News & Updates</h2>

          <label className="font-medium block mb-10">Get the latest news and update, keep your mind fresh and informed</label>
        </div>

        <BlogPostCard 
          img={images.handshake}
          title="6 Ways to get your business “Investor Ready”"
        />

        <BlogPostCard 
          img={images.blog_2}
          title="50 Signs you might be an Entrepreneur"
        />

        <BlogPostCard 
          img={images.baker}
          title="6 Ways to get your business “Investor Ready”"
        />
      </div>
    </div>
  )
}
