import React from "react";

interface ISectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: ISectionTitleProps) => {
  return (
    <div className="relative w-full dark:bg-slate-950 py-12">
      <span className="text-5xl font-bold relative z-[9999]">{text}</span>
      <span className="text-8xl absolute top-4 -left-2 md:-left-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-800 font-bold">
        {text}
      </span>
    </div>
  );
};

export default SectionTitle;
