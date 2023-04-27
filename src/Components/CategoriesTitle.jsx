import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function CategoriesTitle() {
  const [state, setState] = useState("All");

  const titleName = (e) => {
    setState(e);
  };
  return (
    <div className="container mx-auto px-6 md:px-20 xl:px-40 pt-14 md:pt-20">
      <div>
        <div>
          <div>
            <Link onClick={() => window.top(0, 0)} to="/">
              <div className="flex items-center text-sm md:text-md">
                {<FaAngleLeft />} Home
              </div>
            </Link>
          </div>
          <h2 className="text-center text-xl md:text-2xl font-bold">{state}</h2>
        </div>
        <div className="flex justify-center space-x-3 md:space-x-6 xl:space-x-10 mt-10">
          <Link to="all">
            <button
              onClick={() => titleName("All")}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded "
            >
              All
            </button>
          </Link>

          <Link to="caudae">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded "
              onClick={() => titleName("Caudae")}
            >
              Caudae
            </button>
          </Link>

          <Link to="fabled">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded "
              onClick={() => titleName("Fabled")}
            >
              Fabled
            </button>
          </Link>

          <Link to="holistic">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded "
              onClick={() => titleName("Holistic")}
            >
              Holistic
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesTitle;
