import React from "react";
import CategoriesTitle from "../Components/CategoriesTitle";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";

function Categories() {
  return (
    <>
      <CategoriesTitle />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Categories;
