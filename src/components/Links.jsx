import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
const links = [
  {
    Heading: "",
    Info: [""],
  },
  {
    Heading: "",
    Info: ["", "community", "our teams", "help center"],
  },
];
const Links = () => {
  return (
    <section className="container mx-auto p-4 xl:mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* section one */}
        <div className="">
          <div className="flex items-center gap-1 text-xl text-bluePrimary font-medium capitalize cursor-pointer">
            <MdOutlineMenuBook />
            <span className="">e-book</span>
          </div>
          <p className="capitalize mt-3">
            find and explore the best e-book from all your favorite writers
          </p>
        </div>
        {/* about  */}
        <div className="flex flex-col gap-2 font-medium">
          <h4 className="text-2xl font-montagu-slab">About</h4>
          <p className="">awards</p>
          <p>FAQs</p>
          <p>privacy policy</p>
          <p>terms & conditions</p>
        </div>
        {/* company */}
        <div className="flex flex-col gap-2 capitalize font-medium">
          <h4 className="text-2xl font-montagu-slab">Company</h4>
          <p>blogs</p>
          <p>community</p>
          <p>our team</p>
          <p>help center</p>
        </div>
        {/* contact  */}
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-montagu-slab capitalize font-medium">contact</h4>
          <p>sector 11,Uttara, Dhaka Bangladesh</p>
          <p>ebook@gmail.com</p>
          <p>+880 1950-xxxxx</p>
        </div>
        {/* social icons */}
        <div >
        <div className="">
        <h4 className="text-2xl font-montagu-slab capitalize font-medium">socials</h4>
        </div>
          <div className="flex items-center gap-2 text-bluePrimary my-4 text-2xl">
          <IoLogoLinkedin />
          <FaInstagram />
          <IoLogoTwitter/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
