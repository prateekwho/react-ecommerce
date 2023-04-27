import React from "react";
import { items } from "../AllData";
import { Link } from "react-router-dom";

function Fabled() {
  const filteredItems = items.filter((item) => item.category === "fabled");

  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-2 md:px-20 xl:px-40 pt-14 pb-14 md:pt-20 md:pb-20 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
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

export default Fabled;
