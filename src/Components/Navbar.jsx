import React, { useState } from "react";
import { FaShoppingCart, TfiMenu, TfiClose } from "react-icons/all";
import Pingu from "../images/logo/pingu.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = useState(true);

  const toggleMenu = () => {
    let navLinks = document.querySelector(".nav_links");
    navLinks.classList.toggle("top-[14%]");

    setState((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 p-2 shadow-md">
      <div>
        <Link to={"/"}>
          <img src={Pingu} alt="" className="w-20" />
        </Link>
      </div>
      <div className="flex items-center gap-8 z-50">
        <div className="nav_links md:static duration-500 absolute flex items-center justify-center bg-[#ffde59] md:bg-white md:min-h-fit min-h-[50vh] left-0 top-[-100%] w-full px-5">
          <ul className="flex md:flex-row flex-col gap-6 md:gap-10 font-medium md:font-normal uppercase">
            <li className="hover:underline hover:underline-offset-2 cursor-pointer">
              <Link to="/categories/all">catagories</Link>
            </li>
            <li className="hover:underline hover:underline-offset-2 cursor-pointer">
              <Link to="/categories/product/4">product page</Link>
            </li>
          </ul>
        </div>
        <div>
          <FaShoppingCart className="text-2xl" />
        </div>
        <div className="relative" onClick={toggleMenu}>
          {state ? (
            <TfiMenu className="text-2xl md:hidden block" />
          ) : (
            <TfiClose className="text-2xl md:hidden block" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
