import React from "react";
import Button from "./Button";

const Subscription = () => {
  return (
    <section className="container mx-auto p-4 my-12">
      <div className="bg-blackPrimary w-full rounded-xl px-5 py-5">
        <h2 className="h2 text-2xl xl:text-5xl capitalize max-w-[36rem] mx-auto leading-[1.2] font-montagu-slab font-semibold text-center text-white">
          subscribe to receive the latest updates
        </h2>
        {/*  */}
        <div className="flex items-center justify-center">
        <form action="" method="post" className="my-12 bg-white max-w-full py-1 xl:py-0 xl:w-[34rem] pl-6 pr-2 rounded-md flex items-center justify-between">
          <input type="email" placeholder="enter your email" className="bg-transparent outline-none border-none"/>
          <Button btnText={`subscribe`} btnStyle={`rounded`}/>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
