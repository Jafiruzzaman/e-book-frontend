"use client";
import React from "react";
import userOne from "/public/users/user-01.png";
import userTwo from "/public/users/user-02.png";
import userThree from "/public/users/user-03.png";
import userFour from "/public/users/user-04.png";
import userFive from "/public/users/user-05.png";
import userSix from "/public/users/user-06.png";
import Image from "next/image";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
const review = [
  {
    name: "jimmy tyson",
    image: userOne,
    review:
      "the best website to buy books,the purchase is very esy to make and has great discounts.",
    rating: 4,
  },
  {
    name: "Jake M.",
    image: userTwo,
    review:
      "the best website to buy books,the purchase is very esy to make and has great discounts.",
    rating: 4,
  },
  {
    name: "rial loz",
    image: userThree,
    review:
      "the best website to buy books,the purchase is very esy to make and has great discounts.",
    rating: 4,
  },
  {
    name: "albert ava",
    image: userFour,
    review:
      "the best website to buy books,the purchase is very esy to make and has great discounts.",
    rating: 4,
  },
  {
    name: "Emily W",
    image: userFive,
    review:
      "The Kindle Store is convenient, but the prices can be high, especially for bestsellers.",
    rating: 4,
  },
  {
    name: "Michael B",
    image: userSix,
    review:
      "I’ve been using the Kindle Store for years, and it’s hard to beat their selection.",
    rating: 4,
  },
];
const Testimonials = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl xl:text-5xl font-semibold text-blackPrimary mb-7 capitalize text-center font-montagu-slab">
        customer’s opinions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {review.map((item, index) => {
          return (
            <div
              className="bg-white flex flex-col py-8 items-center rounded-md hover:shadow-md transition gap-4 justify-center p-4"
              key={index}
            >
              <div className="">
                <Image
                  src={item.image}
                  className="rounded-full"
                  priority
                  alt="user image"
                />
              </div>
              <h4 className="xl:text-[2rem] text-2xl font-medium capitalize font-montagu-slab ">
                {item.name}
              </h4>
              <p className="text-sm max-w-[20rem] leading-[1.2] xl:text-[17px] text-center">
                {item.review}
              </p>
              <div className="flex items-center gap-1 text-lg text-bluePrimary">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
