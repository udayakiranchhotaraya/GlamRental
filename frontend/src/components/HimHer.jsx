import React from "react";
import { Link } from "react-router-dom";

const HimHer = () => {
  return (
    <>
      <div className="container justify-center items-center bg-[#242424] px-[10%] mx-auto py-10">
        <h2 className="block text-4xl/loose text-center mb-5 text-white font-bold">Shop for...?</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="md:w-[40%] group block overflow-hidden">
            <div className="h-full w-full object-cover transition duration-500 group-hover:scale-105">
              <Link to={`/shop/men`} className="text-white">
                <img
                  className="object-contain h-full w-full"
                  src="/assets/HIM.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          &nbsp; &nbsp;
          <div className="md:w-[40%] group block overflow-hidden">
            <div className="h-full w-full object-cover transition duration-500 group-hover:scale-105">
              <Link to={`/shop/women`} className="text-white">
                <img
                  className="object-contain h-full w-full"
                  src="/assets/HER.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HimHer;
