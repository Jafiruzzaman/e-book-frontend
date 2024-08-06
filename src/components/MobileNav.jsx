"use client";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="text-xl text-bluePrimary" onClick={toggleMenu}>
      {showMenu ? <IoMdClose /> : <HiMenu />}
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default MobileNav;
