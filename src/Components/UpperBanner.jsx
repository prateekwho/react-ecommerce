import React from "react";
import Banner from "../images/banner/Banner1.jpg";
import { Link } from "react-router-dom";

function UpperBanner() {
  return (
    <div className="mb-20">
      <div className="mx-2 my-5 md:mx-10 xl:mx-20 md:my-6 xl:my-10 py-28 md:py-10 relative cursor-pointer transform transition-all hover:-translate-y-2 duration-300 flex justify-items-center">
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000080] rounded-xl "></div>
        <img src={Banner} />
        <div className="absolute top-[32%] left-[57%] md:top-[25%] xl:top-[38%] xl:left-[48%] translate-x-[-100px] text-white text-2xl font-bold text-center">
          <p className="text-3xl md:text-6xl font-extrabold mb-2">Sale 20%</p>
          <p className="uppercase text-sm md:text-2xl font-light mb-2 md:mb-5">
            Don't miss the chance
          </p>
          <Link to="/categories/Caudae">
            <button className="border-2 bg-transparent px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl rounded hover:bg-white hover:text-black">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpperBanner;
