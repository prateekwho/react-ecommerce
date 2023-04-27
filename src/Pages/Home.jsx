import React from "react";
import MostSellingProduct from "../Components/MostSellingProduct";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import UpperBanner from "../Components/UpperBanner";
import LowerBanner from "../Components/LowerBanner";

function Home() {
  return (
    <div>
      <UpperBanner />
      <MostSellingProduct />
      <LowerBanner />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
