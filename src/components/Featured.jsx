import React from "react";
import imageOne from "/public/Featured/image-01.png";
import imageTwo from "/public/Featured/image-02.png";
import imageThree from "/public/Featured/image-03.png";
import imageFour from "/public/Featured/image-04.png";
import imageFive from "/public/Featured/image-05.png";
import imageSix from "/public/Featured/image-06.png";
import imageSeven from "/public/Featured/image-07.png";
import imageEight from "/public/Featured/image-08.png";
import Image from "next/image";
import Button from "./Button";
const FeaturedBooks = [
  {
    name: "the fill book",
    author: "",
    img: imageOne,
    rating: 0,
    price: "$36.14",
    discountPrice: "$31.20",
    description: "",
    releaseYear: "",
  },
  {
    name: "down to earth",
    author: "",
    img: imageTwo,
    rating: 0,
    price: "$37.48",
    discountPrice: "$34.56",
    description: "",
    releaseYear: "",
  },
  {
    name: "treasure island",
    author: "",
    img: imageThree,
    rating: 0,
    price: "$30.10",
    discountPrice: "$32.17",
    description: "",
    releaseYear: "",
  },
  {
    name: "the old man & sea",
    author: "",
    img: imageFour,
    rating: 0,
    price: "$48.5",
    discountPrice: "$23.38",
    description: "",
    releaseYear: "",
  },
  {
    name: "scatter,adatpt",
    author: "",
    img: imageFive,
    rating: 0,
    price: "$38.09",
    discountPrice: "$28.89",
    description: "",
    releaseYear: "",
  },
  {
    name: "lovely bones",
    author: "",
    img: imageSix,
    rating: 0,
    price: "$27.38",
    discountPrice: "$24.49",
    description: "",
    releaseYear: "",
  },
  {
    name: "julies verne",
    author: "",
    img: imageSeven,
    rating: 0,
    price: "$43.31",
    discountPrice: "$39.38",
    description: "",
    releaseYear: "",
  },
  {
    name: "the stuck",
    author: "",
    img: imageEight,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
];
const Featured = () => {
  return (
    <>
      <section className="container px-4 py-3 mx-auto my-12">
        <h2 className="text-3xl xl:text-5xl font-semibold text-blackPrimary mb-7 text-center font-montagu-slab">
          Featured Books
        </h2>
        <div className="xl:gap-8 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FeaturedBooks.map((item, index) => {
            return (
              <div
                className="bg-white rounded-md hover:shadow-md flex items-center flex-col gap-4 py-8  px-6 cursor-pointer"
                key={index}
              >
                <Image
                  src={item.img}
                  priority
                  alt="book-image"
                  className="shadow-imageShadow"
                />
                <div className="grid place-content-center ">
                  <h3 className="my-4 text-2xl text-center font-montagu-slab  capitalize font-medium text-blackPrimary">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between ">
                    <span className="font-medium text-bluePrimary">
                      {item.discountPrice}
                    </span>
                    <span className="line-through  text-gray-500">
                      {item.price}
                    </span>
                  </div>
                  {/* buttons */}
                  <Button
                    btnText={`add to cart`}
                    btnStyle={`w-fit text-center my-4 mx-auto`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mx-auto my-12">
          <Button
            btnText={`explore more`}
            btnStyle={`my-8 hover:-translate-y-2 transition-all duration-200`}
          />
        </div>
      </section>
    </>
  );
};

export default Featured;
