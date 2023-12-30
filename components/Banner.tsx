"use client";

import React from "react";
import HexGrid from "@/components/HexGrid";
import {
  MotionButton,
  MotionDiv,
  MotionH1,
  MotionH2,
} from "@/components/MotionElements";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Adjust threshold as needed
  });
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid grid-rows-2 md:grid-cols-2 h-screen">
      <div
        className="flex flex-col items-center justify-start md:items-start md:justify-center h-screen"
        ref={ref}
      >
        <MotionH2
          variants={slideDownVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0, ease: "easeInOut", duration: 0.1 }}
          className="text-xl text-slate-500 hover:opacity-90"
        >
          HI, I AM RAVI & I AM A FULL STACK
        </MotionH2>
        <MotionH1
          variants={slideDownVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.01, ease: "easeInOut", duration: 0.1 }}
          className="font-bold text-5xl  bg-gradient-to-r bg-clip-text  text-transparent 
          from-cyan-300 via-cyan-500 to-cyan-950
          animate-text  mb-2 text-center md:text-left"
        >
          DEVELOPER & DESIGNER
        </MotionH1>
        <MotionDiv
          variants={slideDownVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.15, ease: "easeInOut", duration: 0.1 }}
          className="text-slate-950 dark:text-slate-100 mb-4"
        >
          I am a Software Developer at{" "}
          <a href="https://antino.com" className="font-bold">
            Antino Labs
          </a>
          . I have more than <span className="font-bold">2.5 years</span> of
          experience designing and developing digital experiences. I am
          currently focussed on learning new technologies which can help in
          building scalable products.
        </MotionDiv>
        <MotionButton
          variants={slideUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2, ease: "linear", duration: 0.1 }}
          className="uppercase border-[.5px] w-full md:w-2/3 lg:w-1/2 my-2 py-2 px-8 text-slate-900 bg-none md:mr-8 border-slate-950 dark:border-cyan-300/40 dark:bg-none dark:text-cyan-300 hover:shadow-lg hover:dark:shadow-black hover:tracking-widest transition-all duration-300"
        >
          Get in Touch
        </MotionButton>
      </div>
      <div className="flex justify-center md:justify-end items-end md:items-center order-first md:order-last md:h-screen z-0">
        <HexGrid inView={inView} />
      </div>
    </div>
  );
};

export default Banner;
