import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';


const Header = () => {
  const [color, setColor] = useState(false);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const getWishCount = () => {
    return wishlist.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={
        color
          ? "w-full flex justify-between sticky top-0 z-50 bg-white shadow-xl"
          : "w-full flex justify-between sticky top-0 z-50 bg-white"
      }
    >
      <div className="text-2xl font-bold p-4">
        <Link href="/">
          Web<span className="text-[#9400D3]">S</span>hop
        </Link>
      </div>
      {/* Search Bar Starts */}
      <div className="hidden sm:flex">
        <input
          type="text"
          className="m-3 bg-transparent border border-black shadow-lg rounded-lg w-80 p-1 text-black"
          placeholder="Search"
        />
        <div className="mt-3 hover:text-[#9400D3]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* Search Bar Ends */}
      <div className="flex mx-4 m-3">
        <Link href="/cart" className="mr-4 hover:text-[#9400D3] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="p-1 text-lg font-bold">({getItemsCount()})</div>
        </Link>
        <Link href="/wishlist" className="mr-2 hover:text-[#9400D3] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <div className="p-1 text-lg font-bold">({getWishCount()})</div>
        </Link>
      </div>
    </nav>
  );
}

export default Header