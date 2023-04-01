import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
export default function Navbar() {
  return (
    <div className="bg-primary flex flex-row items-center justify-around py-5 z-10 sticky top-5 rounded-full drop-shadow-2xl">
      <div className="text-neutral-200 font-bold text-2xl cursor-pointer hover:text-secondary duration-200">
        WholeSale Mall
      </div>

      <div className="flex flex-row items-center gap-5 text-neutral-200 text-xl">
        <div className="cursor-pointer hover:text-secondary duration-200">
          Categories
        </div>
        <div className="cursor-pointer hover:text-secondary duration-200">
          What&apos;s new
        </div>
        <div className="cursor-pointer hover:text-secondary duration-200">
          Deals
        </div>
      </div>

      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-center relative">
          <input
            type="text"
            placeholder="Search for a product"
            className="pr-5 pl-10 py-2 rounded-full bg-[#002247] focus:outline-none text-neutral-200 text-lg font-semibold"
          />
          <FiSearch className="stroke-secondary absolute left-3" size="20" />
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer group">
          <FiUser className="stroke-secondary " size="25" />
          <span className="text-neutral-100 text-lg font-bold group-hover:text-secondary duration-200">
            Account
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer group">
          <FiShoppingCart className="stroke-secondary " size="25" />
          <span className="text-neutral-100 text-lg font-bold group-hover:text-secondary duration-200">
            Cart
          </span>
        </div>
      </div>
    </div>
  );
}
