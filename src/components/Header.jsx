import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0  bg-white z-50">
    <header className="container mx-auto flex items-center justify-between xl:py-6 py-3 px-4">
      {/* logo */}
      <div className="flex items-center gap-1 text-xl text-bluePrimary font-medium capitalize cursor-pointer">
        <MdOutlineMenuBook />
        <span className="">e-book</span>
      </div>
      <div className="hidden xl:flex">
        <DesktopNav />
      </div>
      <div className="flex xl:hidden">
        <MobileNav />
      </div>
      <div className="hidden xl:flex gap-3 text-2xl text-bluePrimary">
      <LuShoppingCart />
      <HiOutlineUserCircle />
      </div>
    </header>
    </div>
  );
};

export default Header;
