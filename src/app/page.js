import Image from "next/image";
import logo from "../../public/logo.svg";
import bodyimg from "../../public/bodyimg.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-between h-[95vh] my-auto">
      
      <nav className="flex items-center justify-center gap-4 md:gap-6 lg:gap-10 my-6">
        <Image src={logo} alt="logo" className=" w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"></Image>
        <h1 className="text-[#272727] font-bold text-xl sm:text-2xl md:text-3x">GovPunk</h1>
      </nav>

      <div className="flex flex-col items-center">
        <h1 className="text-[8vw] sm:text-[40px] md:text-[45px] lg:text-[48px] xl:text-[60px] w-[85%] sm:w-[90%] md:w-[80%] lg:w-[64%] xl:w-[64%] leading-tight font-bold text-center mb-3 text-transparent bg-gradient-to-r from-[#0774E9] via-[#11BAE9] to-[#9936E5] bg-clip-text">
          Empowering DAOs with
          active, unbiased governance.
        </h1>
        <p className="italic text-xs sm:text-base w-[85%] sm:w-[75%] md:w-[60%] lg:w-[45%] mx-auto text-center text-[#474747]">
          GovPunk is an AI delegate designed to bring transparency, efficiency,
          and meaningful contributions to DAOs. By leveraging data-driven
          insights and active participation, it ensures governance decisions
          align with community values and goals.
        </p>

        <Image
          src={bodyimg}
          alt="bodyimg"
          className="w-auto h-[38vh] rounded-[40px] my-4"
        ></Image>

        <Link href="/meet">
          <button className="border border-[#A4C0DF] text-xs sm:text-base px-[17px] py-[7px] sm:px-[20px] sm:py-[10px] bg-[#CADDF1] rounded-xl my-3">
            Meet GovPunk
          </button>
        </Link>
      </div>
    </div>
  );
}
