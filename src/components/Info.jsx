import React from "react";
import { PiTruckBold } from "react-icons/pi";
import { FaCcPaypal } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const InfoStats = [
  {
    title: "free shipping",
    description: "order more than 100$",
    icon: <PiTruckBold />,
  },
  {
    title: "secure payment",
    description: "100% secure payment",
    icon: <FaCcPaypal />,
  },
  {
    title: "24/7 support",
    description: "call us anytime",
    icon: <MdSupportAgent />,
  },
];
const Info = () => {
  return (
    <section className="container px-4 gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {InfoStats.map((item, index) => {
        return (
          <div
            className="bg-white rounded-md flex flex-col gap-3 items-center justify-center hover:shadow-lg cursor-pointer transition-all duration-200 py-5"
            key={index}
          >
            <div className="text-4xl text-bluePrimary">{item.icon}</div>
            <h3 className="text-3xl  text-center mx-auto capitalize font-medium font-montagu-slab">
              {item.title}
            </h3>
            <p className="text-lg">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Info;
