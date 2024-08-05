import Image from "next/image";
import React from "react";
import HeroImage from "/public/Header/Book-cover-01.png";
import HeroImageTwo from "/public/Header/Book-cover-02.png";
import HeroImageThree from "/public/Header/Book-cover-05.png";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="flex items-center flex-wrap xl:justify-between gap-8 flex-col xl:flex-row container mx-auto py-12 px-3 xl:px-0 xl:py-24 mt-12 xl:mt-[4rem]">
      {/* text  */}
      <div className="text-center order-2 my-6 xl:order-1 xl:text-left">
        <h1 className="h1 capitalize xl:max-w-[40rem] ">
          browse & select e-books
        </h1>
        <p className="max-w-[19rem] xl:max-w-[26rem] leading-loose  my-2 capitalize">
          find the best e-books from your favorite writers, explore hundreds of
          books with all possible categories, take advantage of the 50% discount
          and much more.
        </p>
        <Button btnText={`explore more`}/>
      </div>
      {/* image */}
      <div className="flex items-center gap-4  xl:gap-16 order-1 xl:order-2">
        <Image
          src={HeroImage}
          alt="hero image"
          className="xl:w-full w-[100px]"
        />
        <Image
          src={HeroImageTwo}
          alt="hero image"
          className="xl:w-full w-[100px] xl:scale-150 scale-125"
        />
        <Image
          src={HeroImageThree}
          alt="hero image"
          className="xl:w-full w-[100px]"
        />
      </div>
    </section>
  );
};

export default Hero;
