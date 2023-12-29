import React from "react";
import HexGrid from "@/components/HexGrid";
import {
  MotionButton,
  MotionDiv,
  MotionH1,
  MotionH2,
} from "@/components/MotionElements";

const slideDownVariant = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const slideUpVariant = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-rows-2 md:grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-start md:items-start md:justify-center h-screen">
        <MotionH2
          variants={slideDownVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, ease: "easeInOut", duration: 0.5 }}
          className="text-xl text-slate-500 hover:opacity-90"
        >
          HI, I AM RAVI & I AM A FULL STACK
        </MotionH2>
        <MotionH1
          variants={slideDownVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05, ease: "easeInOut", duration: 0.5 }}
          className="font-bold text-4xl text-cyan-700 dark:text-cyan-300 mb-2 text-center md:text-left"
        >
          DEVELOPER & DESIGNER
        </MotionH1>
        <MotionDiv
          variants={slideDownVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15, ease: "easeInOut", duration: 0.5 }}
          className="text-slate-950 dark:text-slate-100 mb-4"
        >
          I am a Software Developer at{" "}
          <a href="https://antino.com" className="font-bold">
            Antino Labs
          </a>
          . I have more than <span className="font-bold">2.5 years</span>{" "}
          of experience designing and developing digital experiences. I am
          currently focussed on learning new technologies which can help in
          building scalable products.
        </MotionDiv>
        <MotionButton
          variants={slideUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, ease: "linear", duration: .05 }}
          className="uppercase border-[.5px] w-full md:w-2/3 lg:w-1/2 my-2 py-2 px-8 text-slate-900 bg-none md:mr-8 border-slate-950 dark:border-cyan-300 dark:bg-none dark:text-cyan-300 hover:shadow-md hover:dark:shadow-cyan-300/20 hover:tracking-widest transition-all duration-300"
        >
          Get in Touch
        </MotionButton>
      </div>
      <div className="flex justify-center md:justify-end items-end md:items-center order-first md:order-last md:h-screen z-0">
        <HexGrid />
      </div>
    </div>
  );
};

export default Banner;
