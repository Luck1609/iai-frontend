import React from "react";
import AboutComponent from "./components/AboutComponent";
import BlogPostComponent from "./components/BlogPostComponent";
import CallToAction from "./components/CallToAction";
import ContactComponent from "./components/ContactComponent";
import JudgesComponent from "./components/JudgesComponent";
// import SliderComponent from './components/SliderComponent'

export default function Home() {
  return (
    <>
      {/* <SliderComponent /> */}
      <CallToAction />
      <AboutComponent />
      <JudgesComponent />
      <BlogPostComponent />
      <ContactComponent />
    </>
  );
}
