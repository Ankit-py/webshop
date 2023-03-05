import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlist.slice";
import { addToCart } from "../../redux/cart.slice";
import Head from "next/head";
import { useState } from "react";

const WishlistPage = () => {

  const [show1, setshow1] = useState(true);

  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return wishlist.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <>
      <Head>
        <title>WebShop | Wishlist</title>
      </Head>
      {wishlist.length === 0 ? (
        <h1 className="text-3xl font-bold h-screen mt-20 text-center justify-center">
          Your Wishlist is empty !!!
        </h1>
      ) : (
        <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
          <div className="flex flex-col jusitfy-start items-start">
            <div className="mt-3">
              <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">
                Your Wishlist
              </h1>
            </div>
            <div className="mt-4">
              <p className="text-2xl tracking-tight leading-6 text-gray-600">
                {wishlist.length} items
              </p>
            </div>
            <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
              {wishlist.map((item, index) => (
                <div
                  className="flex flex-col border border-black rounded-lg p-4"
                  key={item}
                >
                  <div className="relative">
                    <img
                      className="block p-4"
                      src={item.image}
                      alt={item.title}
                    />
                    <button
                      aria-label="close"
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-[#9400D3] text-white hover:text-black"
                    >
                      <svg
                        className="fil-current"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L13 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                        {item.title.substring(0, 25)}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        aria-label="show menu"
                        onClick={() => setshow1(!show1)}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-[#9400D3] text-white hover:text-black"
                      >
                        <svg
                          className={`fill-stroke ${
                            show1 ? "block" : "hidden"
                          }`}
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 5L5 1L1 5"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          className={`fill-stroke ${
                            show1 ? "hidden" : "block"
                          }`}
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    id="menu1"
                    className={` flex-col jusitfy-start items-start mt-12 ${
                      show1 ? "flex" : "hidden"
                    }`}
                  >
                    <div>
                      <p className="tracking-tight text-lg text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="tracking-tight text-black font-bold leading-4 text-gray-800">
                        ${item.price}
                      </p>
                    </div>
                    <div className="w-full"></div>
                    <div className="w-full mt-6">
                      <button
                        onClick={() => {
                          dispatch(addToCart(item));
                          dispatch(removeFromWishlist(item.id));
                        }}
                        className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-[#9400D3] rounded-lg bg-black border border-gray-800"
                      >
                        Move to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WishlistPage;
