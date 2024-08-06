import Image from "next/image";
import React from "react";
import discountImage from "/public//discount.png";
import Button from "./Button";
const Discount = () => {
  return (
    <section className="container mx-auto my-4 xl:my-20 p-4">
      <div className="flex items-center flex-col xl:flex-row xl:justify-between gap-8">
        <div className="">
          <Image
            src={discountImage}
            priority
            alt="discount image"
            className="max-w-[22rem] xl:max-w-full"
          />
        </div>
        <div className="flex flex-col items-center xl:items-start gap-4 ">
          <h2 className="capitalize text-3xl font-semibold text-blackPrimary xl:text-6xl font-montagu-slab ">
            up to 50% discount
          </h2>
          <p className="xl:text-[17px] leading-[1.6] text-center xl:text-left text-sm capitalize xl:max-w-[32rem] ">
            take advantage of the discount days we have for you, buy books from
            your favorite writer,the more you buy, the more we have for you.
          </p>
          <Button btnText={`shop now`} btnStyle={`w-fit`} />
        </div>
      </div>
    </section>
  );
};

export default Discount;
