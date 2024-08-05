import Link from 'next/link'
import React from 'react'
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
const DesktopNav = () => {
  return (
    <nav className='flex items-center gap-6'>
      {
        links.map((link,index)=>{
          return (
            <Link key={index} href={""} className='text-blackPrimary text-lg capitalize hover:text-bluePrimary font-medium'>
            {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default DesktopNav