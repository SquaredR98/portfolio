import React from "react";
import { MotionSpan } from "./MotionElements";

interface ISectionTitleProps {
  text: string;
  inView: boolean;
}

const SectionTitle = ({ text, inView }: ISectionTitleProps) => {
  return (
    <div className="relative w-full dark:bg-slate-950 py-12">
      <MotionSpan
        variants={{
          hidden: {
            zoom: 1.5,
            opacity: 0,
          },
          visible: {
            zoom: 1,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
        className="text-6xl font-bold relative bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text"
      >
        {text}
      </MotionSpan>
      <MotionSpan
        variants={{
          hidden: {
            zoom: 1.5,
            opacity: 0,
          },
          visible: {
            zoom: 1,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
        className="text-8xl absolute top-4 -left-2 -z-10 md:-left-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-800 font-bold"
      >
        {text}
      </MotionSpan>
    </div>
  );
};

export default SectionTitle;
