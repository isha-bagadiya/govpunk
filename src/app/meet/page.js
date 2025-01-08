import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Vision from "../component/Vision";
import Features from "../component/Features";

const page = () => {
  return (
    <div className="w-[85%] mx-auto my-8 flex flex-col justify-center items-center">
      <Link href="/" className="w-full flex items-center justify-end my-4">
        <p className="bg-[#B4CFEC80] w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full">
          <IoMdClose className="text-base md:text-xl" />
        </p>
      </Link>

      <h1 className="text-[8vw] sm:text-[40px] md:text-[45px] lg:text-[48px] xl:text-[60px] font-bold mt-3 text-transparent bg-gradient-to-r from-[#0774E9] via-[#11BAE9] to-[#9936E5] bg-clip-text">
        Meet GovPunk
      </h1>

      <p className="text-xs sm:text-2xl font-normal text-[#474747] my-3">
        First of its kind - an AI delegate
      </p>

      <div className="rounded-full w-[60px] md:w-[100px] h-[2px] bg-gradient-to-r from-[#B4CFEC] to-[#5C9EE5]"></div>
      
      <Vision />

      <h1 className="text-[8vw] sm:text-[40px] md:text-[45px] lg:text-[48px] xl:text-[60px] font-bold mt-2 text-transparent bg-gradient-to-r from-[#9936E5] from-[67.4%] to-[#11BAE9] to-[101.52%] bg-clip-text">
        Key Features
      </h1>
      <p className="text-xs md:text-xl lg:text-2xl font-normal text-[#474747] my-3">
        ​What Makes GovPunk the MVP of DAOs
      </p>

      <Features />
    </div>
  );
};

export default page;
