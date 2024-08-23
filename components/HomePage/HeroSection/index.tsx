import { Fira_Sans, Fira_Sans_Extra_Condensed } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FaGit, FaGitAlt, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGraphql, SiMongodb, SiNestjs, SiPrisma, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandHtml5, TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const firsSans = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const firsSansCondensed = Fira_Sans_Extra_Condensed({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex md:items-center h-[50vh] md:min-h-screen">
          <div className={`${firsSans.className}`}>
            <p className="text-center md:text-left text-4xl text-gray-600">
              Creating
            </p>
            <p
              className={`text-center md:text-left text-6xl md:text-8xl font-bold my-6 text-cyan-500 tracking-wider ${firsSansCondensed.className}`}
            >
              Digital Experiences
            </p>
            <p className="text-center md:text-left text-4xl text-gray-600">
              One Pixel at a time
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:min-h-screen flex gap-x-6 items-center">
          <div className="h-[80%] w-1/3 relative scale-90 overflow-hidden">
            <SiRedux className="text-gray-600 hover:text-purple-900 text-6xl md:text-8xl absolute -right-2 md:-right-4 top-0 transition-all duration-700 ease-in-out" />
            <IoLogoJavascript className="text-gray-600 hover:text-yellow-500 text-6xl md:text-8xl absolute -left-2 md:-left-4 top-16 transition-all duration-700 ease-in-out" />
            <FaReact className="text-gray-600 hover:text-cyan-700 text-6xl md:text-8xl absolute -right-2 md:-right-4 top-24 md:top-32 transition-all duration-700 ease-in-out" />
            <SiTailwindcss className="text-gray-600 hover:text-sky-500 text-6xl md:text-8xl absolute left-0 top-[9rem] md:top-52 transition-all duration-700 ease-in-out" />
            <FaSass className="text-gray-600 hover:text-purple-900 text-6xl md:text-8xl absolute -right-2 md:-right-4 top-48 md:top-[17rem] transition-all duration-700 ease-in-out" />
            <TbBrandNextjs className="text-gray-600 hover:text-purple-900 text-6xl md:text-8xl absolute left-0 top-60 md:top-[22rem] transition-all duration-700 ease-in-out" />
            <TbBrandHtml5 className="text-gray-600 hover:text-orange-500 text-6xl md:text-8xl absolute -right-3 md:-right-5 top-[17rem] md:top-[25rem] transition-all duration-700 ease-in-out" />
          </div>
          <div className="h-[80%] w-1/3 relative scale-110">
            <Image
              src="/home/hero-section/developer.webp"
              className="object-cover"
              alt=""
              fill
            />
          </div>
          <div className="h-[80%] w-1/3 relative scale-90 overflow-hidden">
            <TbBrandNodejs className="text-gray-600 hover:text-green-800 text-6xl md:text-8xl absolute -left-2 md:-left-3 top-0 transition-all duration-700 ease-in-out" />
            <SiNestjs className="text-gray-600 hover:text-red-500 text-6xl md:text-8xl absolute right-0 top-12 md:top-16 transition-all duration-700 ease-in-out" />
            <BiLogoPostgresql className="text-gray-600 hover:text-blue-950 text-6xl md:text-8xl absolute -left-2 md:-left-3 top-24 md:top-32 transition-all duration-700 ease-in-out" />
            <SiPrisma className="text-gray-600 hover:text-sky-500 text-6xl md:text-8xl absolute right-0 top-32 md:top-52 transition-all duration-700 ease-in-out" />
            <SiMongodb className="text-gray-600 hover:text-green-900 text-6xl md:text-8xl absolute -left-2 md:-left-4 top-44 md:top-[17rem] transition-all duration-700 ease-in-out" />
            <SiGraphql className="text-gray-600 hover:text-purple-900 text-6xl md:text-8xl absolute right-0 top-56 md:top-[21rem] transition-all duration-700 ease-in-out" />
            <FaGitAlt className="text-gray-600 hover:text-orange-500 text-6xl md:text-8xl absolute left-0 top-[17rem] md:top-[25rem] transition-all duration-700 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
}
