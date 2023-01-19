import React, { Component } from "react";
import Slider from "react-slick";
import { images } from "@assets/img/images";
// import { ArrowLeft, ArrowRight } from "@mui/icons-material";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="w-full overflow-hidden">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3 className="w-full h-[300px]">1</h3>
          </div>
          <div>
            <h3 className="w-full h-[300px]">2</h3>
          </div>
          <div>
            <h3 className="w-full h-[300px]">3</h3>
          </div>
          <div>
            <h3 className="w-full h-[300px]">4</h3>
          </div>
          <div>
            <h3 className="w-full h-[300px]">5</h3>
          </div>
          <div>
            <h3 className="w-full h-[300px]">6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}            


const slideImages = [
  images.market, images.sewing, images.mechanic
]