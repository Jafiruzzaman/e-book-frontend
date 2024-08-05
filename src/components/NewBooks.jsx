import React from "react";
import ImageOne from "/public/newBooks/image-01.png";
import ImageTwo from "/public/newBooks/image-02.png";
import ImageThree from "/public/newBooks/image-03.png";
import ImageFour from "/public/newBooks/image-04.png";
import ImageFive from "/public/newBooks/image-05.png";
import ImageSix from "/public/newBooks/image-06.png";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import { IoIosStarHalf } from "react-icons/io";

const newBooksList = [
  {
    name: "the dog  ear",
    author: "",
    img: ImageOne,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
  {
    name: "the night guest",
    author: "",
    img: ImageTwo,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
  {
    name: "down to earth",
    author: "",
    img: ImageThree,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
  {
    name: "lovely bones",
    author: "",
    img: ImageFour,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
  {
    name: "me and earl",
    author: "",
    img: ImageFive,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
  {
    name: "the crash plane",
    author: "",
    img: ImageSix,
    rating: 0,
    price: "$31.51",
    discountPrice: "$29.46",
    description: "",
    releaseYear: "",
  },
];
const NewBooks = () => {
  return <section className="container mx-auto p-4">
  <h2 className="text-3xl xl:text-5xl font-semibold text-blackPrimary mb-7 capitalize text-center font-montagu-slab">
          new Books
        </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {
        newBooksList.map((item,index)=>{
          return(
            <div className="bg-white p-5 flex gap-6 items-center  rounded transition-all duration-300 cursor-pointer hover:-translate-y-2" key={index}>
            <div className="">
              <Image  src={item.img} alt="book image"/>
            </div>
            <div className="flex  items-start gap-4 flex-col py-4">
              <h3 className="text-2xl font-montagu-slab capitalize text-blackPrimary font-medium">{item.name}</h3>
              <div className="flex items-center gap-12">
              <span className="font-medium text-bluePrimary">
                      {item.discountPrice}
                    </span>
                    <span className="line-through  text-gray-500">
                      {item.price}
                    </span>
              </div>
              <div className="flex items-center gap-1 text-lg text-bluePrimary">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
<IoIosStarHalf />
              </div>
            </div>
            </div>
          )
        })
      }
    </div>
  </section>;
};

export default NewBooks;
