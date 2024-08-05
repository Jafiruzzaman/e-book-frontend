import Discount from '@/components/Discount'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import Links from '@/components/Links'
import NewBooks from '@/components/NewBooks'
import Subscription from '@/components/Subscription'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Info />
      <Featured />
      <Discount/>
      <NewBooks/>
      <Subscription/>
      <Testimonials/>
      <Links />
      <Footer />
    </>
  )
}

export default page