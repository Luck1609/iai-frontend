import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutComponent from "./components/AboutComponent";
import BlogPostComponent from "./components/BlogPostComponent";
import CallToAction from "./components/CallToAction";
import ContactComponent from "./components/ContactComponent";
import JudgesComponent from "./components/JudgesComponent";
import SliderComponent from './components/SliderComponent'


export default function Home() {

  return (
    <div className="w-full overflow-hidden">
      <SliderComponent />
      <div className="-mt-24 lg:-mt-56 relative z-20 mx-2">
        <CallToAction />
      </div>

      <AboutComponent />
      <JudgesComponent />
      <BlogPostComponent />
      <ContactComponent />
    </div>
  );
}
