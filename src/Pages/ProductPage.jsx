import { useState } from "react";
import { items } from "../Components/AllData";
import { useParams } from "react-router";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === Number(id));

  const [amount, setAmount] = useState(1);

  const increaseItem = () => {
    if (amount >= 1) {
      setAmount(amount + 1);
    }
  };

  const decreaseItem = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const calcPrice = (amount) => {
    return amount * item[0].price;
  };

  return (
    <>
      <div className="py-5">
        <div className="container mx-auto px-5 xl:px-40">
          <div className="mb-10 md:mb-40 w-full flex flex-col items-center md:flex-row relative">
            <h3 className="absolute text-center left-[50%] top-3 translate-x-[-80px] text-2xl font-bold">
              {item[0].name}
            </h3>
            <div className="w-full md:w-6/12 h-full pt-20 md:pt-10">
              <div className="w-full flex justify-center h-[50%]">
                <img
                  src={item[0].img}
                  alt="product"
                  className="md:w-9/12 md:h-full object-cover"
                />
              </div>
            </div>
            <div className="text-lg md:w-6/12 h-full bg-gray-300 px-4 md:px-10 pt-5 md:pt-20 xl:pt-32 pb-5 md:pb-16">
              <p className="text-xl mb-5 md:mb-10 xl:mb-20 leading-normal">
                {item[0].des}
              </p>
              <div className="flex flex-col xl:flex-row justify-between mb-10 md:mb-10 xl:mb-20 font-semibold items-center text-xl gap-4">
                <p>Quantity</p>
                <div className="flex border border-solid border-black">
                  <button
                    className="text-5xl w-20 h-16 text-black cursor-pointer bg-white pb-3"
                    onClick={decreaseItem}
                  >
                    -
                  </button>
                  <p className="w-24 h-16 text-center pt-4">{amount}</p>
                  <button
                    className="text-5xl w-20 h-16 text-black cursor-pointer bg-white pb-3"
                    onClick={increaseItem}
                  >
                    +
                  </button>
                </div>
                <p>{calcPrice(amount)}.00$</p>
              </div>
              <div className="flex justify-center">
                <button className="border-2 bg-black text-white px-10 py-3 uppercase hover:bg-transparent hover:border-black hover:text-black">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 justify-between w-full h-24 mb-72 md:mb-40">
            <div className="bg-gray-300 w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Texture:</p>
              <p className="text-lg">{item[0].texture}</p>
            </div>
            <div className="bg-gray-300 w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Weight:</p>
              <p className="text-lg">{item[0].weight}</p>
            </div>
            <div className="bg-gray-300 w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Size:</p>
              <p className="text-lg">{item[0].size}</p>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
