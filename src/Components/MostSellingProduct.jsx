import React from "react";
import { items } from "./AllData";
import { Link } from "react-router-dom";

function MostSellingProduct() {
  const filteredItems = items.filter((item) => item.id >= 4);
  return (
    <div className="m-7 md:mx-20 xl:mx-40 my-10">
      <h2 className="text-center md:text-start text-2xl md:text-3xl font-bold mb-2">
        Most Selling Product
      </h2>
      <div className=" text-xl xl:text-3xl font-bold flex flex-col items-center text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-5 item">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="h-96 w-72 border-2 cursor-pointer hover:border-black"
            >
              <Link to={`/categories/product/${item.id}`}>
                <div className="h-72 w-64 m-auto">
                  <img src={item.img} className="h-full w-full" />
                </div>
                <div className="text-lg p-5 font-medium">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostSellingProduct;
