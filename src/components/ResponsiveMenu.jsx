import Link from 'next/link'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineMenuBook } from 'react-icons/md'
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'featured',
    href: '/featured',
  },
  {
    name:"Discount",
    href: '/discount',
  },
  {
    name:"new books",
    href: '/newbooks',
  },
  {
    name:"testimonials",
    href: '/testimonials',
  },

]
const ResponsiveMenu = ({showMenu}) => {
  return (
    <nav className={`${showMenu ? "-left-0":"-left-[100%]"} z-50  px-4 py-6 transition-all duration-300  top-0 bg-white w-[50%] h-[100vh] absolute`}>
      {/* logo */}
      <div className="flex items-center justify-between ">
      <div className="flex items-center gap-1 text-xl text-bluePrimary font-medium capitalize cursor-pointer">
        <MdOutlineMenuBook />
        <span className="">e-book</span>
      </div>
      <div className="flex gap-1 text-lg text-bluePrimary">
      <LuShoppingCart />
      <HiOutlineUserCircle />
      </div>
      </div>
      {/* nav */}
      <nav className='flex flex-col items-center gap-2 my-32'>
      {
        links.map((link,index)=>{
          return (
            <Link key={index} href={""} className='text-blackPrimary font-medium text-[17px] capitalize hover:text-bluePrimary'>
            {link.name}
            </Link>
          )
        })
      }
    </nav>
    {/* socials */}
    <div className="flex items-center absolute bottom-4 right-0 left-0 justify-center text-center mx-auto">
    <div className="flex gap-4">
    <FaFacebook  className='text-blackPrimary hover:text-bluePrimary'/>
    <IoLogoTwitter  className='text-blackPrimary hover:text-bluePrimary'/>
    <IoLogoLinkedin  className='text-blackPrimary hover:text-bluePrimary'/>
    </div>
    
    </div>
    </nav>
  )
}

export default ResponsiveMenu