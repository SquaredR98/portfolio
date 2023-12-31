"use client";

import React from "react";
import HexGrid from "@/components/HexGrid";
import {
  MotionA,
  MotionButton,
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionLink,
} from "@/components/MotionElements";
import { useInView } from "react-intersection-observer";
import { socialLinks } from "../data";

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
    threshold: 0.25, // Adjust threshold as needed
  });
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid grid-rows-2 lg:grid-cols-2 min-h-[90vh] lg:h-screen">
      <div
        className="flex flex-col items-center justify-start md:items-start md:justify-center lg:h-screen"
        ref={ref}
      >
        <MotionH2
          variants={slideDownVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0, ease: "easeInOut", duration: 0.1 }}
          className="text-xl text-slate-500 hover:opacity-90 text-center w-full lg:text-left py-4"
        >
          HI, I AM RAVI & I AM A FULL STACK
        </MotionH2>
        <MotionH1
          variants={slideDownVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.01, ease: "easeInOut", duration: 0.1 }}
          className="font-bold text-3xl md:text-5xl  bg-gradient-to-r bg-clip-text text-transparent 
          from-cyan-300 via-cyan-500 to-cyan-950
          animate-text  mb-2 text-center lg:text-left w-full"
        >
          DEVELOPER & DESIGNER
        </MotionH1>
        <MotionDiv
          variants={slideDownVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.15, ease: "easeInOut", duration: 0.1 }}
          className="text-slate-950 dark:text-slate-100 mb-4 text-center lg:text-left"
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
        <MotionLink
          href="#contact"
          variants={slideUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2, ease: "linear", duration: 0.1 }}
          className="uppercase text-center rounded border-[.5px] w-full md:w-2/3 mx-auto lg:ml-0 lg:w-1/2 my-2 py-2 px-8 text-slate-900 bg-none lg:mr-8 border-slate-950 dark:border-cyan-300/40 dark:bg-none dark:text-cyan-300 hover:shadow-lg hover:dark:shadow-black hover:tracking-widest transition-all duration-300"
        >
          Get in Touch
        </MotionLink>
        <MotionDiv className="gap-2 mt-4 cursor-pointer hidden md:flex">
          {socialLinks.map(({ Icon, link }, idx) => (
            <MotionA
              key={idx}
              target="_blank"
              href={link}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: idx * 0.25 + 0.5,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="group border hover:border-slate-800 dark:border-slate-900 p-2 rounded-md dark:hover:border-cyan-300 transition-all duration-400 hover:shadow-lg hover:dark:shadow-black"
            >
              <Icon className="text-2xl text-slate-500 hover:text-slate-950 dark:text-slate-600 group-hover:text-slate-950 group-hover:dark:text-cyan-300" />
            </MotionA>
          ))}
        </MotionDiv>
      </div>
      <div
        ref={ref}
        className="flex justify-center lg:justify-end items-end md:items-center order-first lg:order-last lg:h-screen z-0"
      >
        <HexGrid inView={inView} />
      </div>
    </div>
  );
};

export default Banner;
