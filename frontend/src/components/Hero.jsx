import React from "react";
import { Carousel } from "../components";
import { heroCarouselSlides } from "../constants";

const Hero = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center" style={{
        backgroundImage: `url('/assets/2.jpg')`,
        objectFit: 'cover'
      }}>
        {/* <Carousel>
            {
                heroCarouselSlides.map((src, index) => (
                    <img key={index} src={src.url} alt="" />
                ))
            }
        </Carousel> */}
        <h1 className=" text-white text-2xl/loose lg:text-8xl text-center font-extrabold py-20" style={{"WebkitTextFillColor":"white","WebkitTextStroke":"1px","WebkitTextStrokeColor":"black","textShadow":"0px 2px 4px yellow"}}>Glam Rental – where style is borrowed, but confidence is yours to keep.</h1>
      </div>
    </>
  );
};

export default Hero;
