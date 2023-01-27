import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="w-full">
        <div className="w-full h-[400px] lg:h-[750px] bg-market-lady bg-cover"></div>
        <div className="w-full h-[400px] lg:h-[750px] bg-maintenance bg-cover"></div>
        <div className="w-full h-[400px] lg:h-[750px] bg-sewing bg-cover"></div>
      </Slider>
    );
  }
}