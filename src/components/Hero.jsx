import Image from "next/image";
import React from "react";
import HeroImage from "/public/Header/Book-cover-01.png";
import HeroImageTwo from "/public/Header/Book-cover-02.png";
import HeroImageThree from "/public/Header/Book-cover-05.png";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="flex items-center xl:justify-between gap-8 flex-col xl:flex-row container mx-auto py-12 px-3 xl:px-0 xl:py-24 mt-12 xl:mt-[4rem]">
      {/* text  */}
      <div className="text-center order-2 my-6 xl:order-1 xl:text-left">
        <h1 className="h1 md:text-left text-center xl:text-7xl mx-auto md:text-5xl md:max-w-[40rem] md:mb-5 text-[2.2rem] mb-3 capitalize max-w-[18rem] xl:max-w-[36rem] ">
          browse & select e-books
        </h1>
        <p className=" xl:max-w-[26rem] md:max-w-[32rem] leading-[1.6]  my-2 capitalize text-center xl:text-left xl:mx-0 mx-auto">
          find the best e-books from your favorite writers, explore hundreds of
          books with all possible categories, take advantage of the 50% discount
          and much more.
        </p>
        <Button
          btnText={`explore more`}
          btnStyle={`transition-all duration-200 hover:-translate-y-2`}
        />
      </div>
      {/* image */}
      <div className="flex items-center md:gap-8 gap-4  xl:gap-12 order-1 xl:order-2">
        <Image
          src={HeroImage}
          alt="hero image"
          className="xl:w-full lg:w-[10rem] w-[100px]"
        />
        <Image
          src={HeroImageTwo}
          alt="hero image"
          className="xl:w-full w-[100px] lg:w-[10rem] xl:scale-125 scale-125"
        />
        <Image
          src={HeroImageThree}
          alt="hero image"
          className="xl:w-full w-[100px] lg:w-[10rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
