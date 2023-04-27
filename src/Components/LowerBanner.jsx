import { Link } from "react-router-dom";
import Banner from "../images/banner/Banner2.gif";

function LowerBanner() {
  return (
    <div className="mx-5 md:mx-20 xl:mx-40 my-10 md:my-20">
      <div className="flex h-80 xl:h-96">
        <div className="w-full xl:w-6/12 flex items-center justify-center bg-gray-300 px-5">
          <div className="max-w-md">
            <h2 className="text-xl font-bold mb-6">Lorem, ipsum.</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Reiciendis, quos?
            </p>
            <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
              <button className="bg-black text-white text-lg font-bold px-4 py-2 uppercase mt-8 cursor-pointer border-2 border-black transition-all duration-75 hover:bg-transparent hover:text-black">
                Shop now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full xl:w-6/12 bg-gray-300 text-end hidden md:block">
          <img
            src={Banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LowerBanner;
