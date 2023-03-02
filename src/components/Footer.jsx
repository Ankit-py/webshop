import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black text-white pt-12 pb-8 px-4">
      <div className="mx-auto px-4 conatiner overflow-hidden flex-col lg:flex-row justify-between">
        <Link href="/" className="block mr-4 w-1/3">
          <h1 className="text-3xl">
            Web<span className="text-[#9400D3]">S</span>hop
          </h1>
        </Link>
        <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Categories
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                FAQ
              </a>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Company
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Terms of Service
              </a>
            </li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Developers
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Developer API
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
              >
                Guides
              </a>
            </li>
          </ul>
          <div className="text-gray-700 flex flex-col w-full">
            <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
              Follow Me
            </div>
            <div className="flex pl-4 justify-start mt-2">
              <Link
                className="block flex items-center text-gray-300 hover:text-white no-underline"
                href="https://github.com/Ankit-py"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center">
        {" "}
        © Built by Ankit. All rights reserved.
      </div>
    </div>
  );
}

export default Footer