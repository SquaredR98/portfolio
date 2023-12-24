import React from "react";
import HexGrid from "@/components/HexGrid";
import { MotionButton, MotionH1, MotionH2 } from "@/components/MotionElements";

const h1variants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const h2variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const button1Variant = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}
const button2Variant = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-rows-2 md:grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-start md:items-start md:justify-center h-screen">
        <MotionH2
          variants={h1variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, ease: "easeInOut", duration: 1 }}
          className="text-xl text-slate-500 hover:opacity-90"
        >
          HI, I AM RAVI & I AM A FULL STACK
        </MotionH2>
        <MotionH1 
          variants={h2variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05, ease: "easeInOut", duration: 1 }}
          className="font-bold text-4xl text-slate-900 dark:text-cyan-300 mb-4 text-center md:text-left">
          DEVELOPER & DESIGNER
        </MotionH1>
        <div className="flex flex-col md:flex-row w-full">
          <MotionButton 
            variants={button1Variant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.05, ease: "linear", duration: 1 }}
            className="uppercase my-2 py-2 px-8 text-white bg-slate-950 md:mr-8 border border-slate-950 dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950">
            Know More
          </MotionButton>
          <MotionButton 
             variants={button2Variant}
             initial="hidden"
             animate="visible"
             transition={{ delay: 0.1, ease: "linear", duration: 1 }}
            className="uppercase my-2 py-2 px-8 bg-white border border-slate-950 dark:border-cyan-300 text-slate-950 dark:text-cyan-300 dark:bg-slate-950">
            Resume
          </MotionButton>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-end md:items-center order-first md:order-last md:h-screen z-0">
        <HexGrid />
      </div>
    </div>
  );
};

export default Banner;
