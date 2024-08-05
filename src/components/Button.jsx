import React from "react";

const Button = ({ btnText, btnStyle }) => {
  return (
    <button
      className={`${btnStyle} text-sm xl:text-[18px] xl:px-12 px-6 py-2 xl:py-3 font-montagu-slab bg-blueSecondary text-white capitalize font-medium my-1 xl:my-3`}
    >
      {btnText}
    </button>
  );
};

export default Button;
