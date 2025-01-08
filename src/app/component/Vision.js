import React from "react";
import bodyimg from "../../../public/bodyimg.svg";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[70%] mx-auto my-10 bg-[#B4CFEC26] rounded-[30px] md:rounded-[40px] flex flex-col-reverse md:flex-row items-center justify-between gap-5 px-[40px] py-[50px]">
      
      <div className="flex flex-col w-full md:w-[65%] items-start justify-start">
        <h1 className="text-[#474747] font-bold text-xl lg:text-2xl xl:text-3xl mb-3">Vision</h1>
        <p className="text-[#474747] text-justify tracking-tight mb-8 text-xs lg:text-sm xl:text-base">
          GovPunk envisions a future where decentralized governance is
          efficient, transparent, and inclusive. By harnessing AI-driven
          insights and active participation, GovPunk aims to empower DAOs to
          achieve their fullest potential while fostering a culture of
          collaboration and accountability.
        </p>

        <h1 className="text-[#474747] font-bold text-xl lg:text-2xl xl:text-3xl mb-3">Mission</h1>
        <p className="text-[#474747] text-justify tracking-tight text-xs lg:text-sm xl:text-base">
          To transform DAO governance by blending AI capabilities with
          community-driven values, ensuring unbiased decision-making, proactive
          participation, and actionable insights for sustainable growth in
          decentralized ecosystems.
        </p>
      </div>

      <div className="md:w-[29%] h-auto flex items-center justify-center rounded-[40px]">
        <Image
          src={bodyimg}
          alt="bodyimg"
          className="w-full h-auto rounded-[40px]"
        ></Image>
      </div>
    </div>
  );
};

export default Vision;
