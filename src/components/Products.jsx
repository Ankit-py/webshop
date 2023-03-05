import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cart.slice";
import { addToWishlist } from "redux/wishlist.slice";

const Products = () => {
  const dispatch = useDispatch();

  function handleAddToWishlist(product) {
    dispatch(addToWishlist(product));
  }

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="flex items-center justify-center">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const sortProductByPriceAscending = () => {
    const updatedList = [...filter].sort((a, b) => a.price - b.price);
    setFilter(updatedList);
  };

  const sortProductByPriceDescending = () => {
    const updatedList = [...filter].sort((a, b) => b.price - a.price);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <div className="w-full">
        <div className="flex flex-wrap justify-items-center overflow-x-auto overflow-y-hidden py-6 justify-center  bg-white text-gray-800">
          <button
            onClick={() => setFilter(data)}
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-[#9400D3]"
          >
            <span>All Products</span>
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 hover:text-[#9400D3]"
          >
            <span>Mens Clothing</span>
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-[#9400D3]"
          >
            <span>Womens Clothing</span>
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-[#9400D3]"
          >
            <span>Electronics</span>
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-[#9400D3]"
          >
            <span>Accessories</span>
          </button>
        </div>

        {/* Product Card Grid  */}
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5">
          {filter.map((product) => (
            <div
              className="w-full lg:w-72 md:w-72 bg-white border border-black shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              key={product.id}
            >
              <a href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="h-80 w-full lg:w-72 md:w-72 object-contain rounded-t-xl p-4"
                />
              </a>
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.title.substring(0, 70)}
                </p>
                <span className="text-gray-400 mr-3 text-xs">
                  {product.description.substring(0, 60)}
                </span>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => dispatch(addToWishlist(product))}
                    className="ml-auto mt-1 hover:text-[#9400D3]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="ml-2 hover:text-[#9400D3]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="font-semibold text-2xl text-center mt-4 lg:mt-16">
              Trending Products
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center align-center text-center m-4 p-4">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
