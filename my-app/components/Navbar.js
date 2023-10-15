import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap px-1 mb-1 flex-col md:flex-row items-center">
          <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href={"/"}>
              <Image src="/image24.png" width={100} height={2} alt="" />
            </Link>
          </span>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-xl">
            <Link href={"/tshirts"}>
              <span class="mr-5 hover:text-gray-900 inline-flex items-center bg-yellow-100 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                TShirts
              </span>
            </Link>
            <Link href={"/hoodies"}>
              <span class="mr-5 hover:text-gray-900 inline-flex items-center bg-yellow-100 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                Hoodies
              </span>
            </Link>
            <Link href={"/watches"}>
              <span class="mr-5 hover:text-gray-900 inline-flex items-center bg-yellow-100 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                Watches
              </span>
            </Link>
            <Link href={"/order"}>
              <span class="mr-5 hover:text-gray-900 inline-flex items-center bg-yellow-100 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                Products
              </span>
            </Link>
          </nav>
          <button class=" inline-flex items-center bg-orange-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            SALE OFF 30%
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="Cart absolute right-0 top-6 mx-6">
        <button>
          <AiOutlineShoppingCart className="text-2xl text-orange-400 hover:bg-gray-200 rounded text-base mt-4 md:mt-0" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
