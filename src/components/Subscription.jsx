import React from "react";
import Button from "./Button";

const Subscription = () => {
  return (
    <section className="container mx-auto p-4 my-12">
      <div className="bg-blackPrimary w-full rounded-xl px-4 py-5">
        <h2 className="h2 text-2xl xl:text-5xl capitalize max-w-[36rem] mx-auto leading-[1.2] font-montagu-slab font-semibold text-center text-white">
          subscribe to receive the latest updates
        </h2>
        {/*  */}
        <div className="grid place-content-center">
          <form
            action=""
            method="post"
            className="my-6 xl:my-10 xl:bg-white max-w-[18rem] py-1 xl:py-0 xl:max-w-[34rem]  pl-3 xl:pl-6 xl:pr-2 pr-2 rounded-md flex items-center flex-col xl:flex-row gap-3 xl:justify-between"
          >
            <input
              type="email"
              placeholder="enter your email"
              className="xl:bg-transparent px-4 py-[8px] rounded-md outline-none border-none w-[100%]"
            />
            <Button btnText={`subscribe`} btnStyle={`rounded w-fit`} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
