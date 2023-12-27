import React from "react";

interface ISkillTitleProps {
  name: string;
  desc: string;
  isActive: boolean;
}

export default function SkillTitle({ name, desc, isActive }: ISkillTitleProps) {
  return (
    <div
      className={`my-2 border px-2 py-1 hover:cursor-pointer transition-all duration-400 ease-in-out ${
        isActive
          ? "dark:border-cyan-300 shadow-md dark:shadow-[2.0px_2.0px_16.0px_rgba(103,232,249,0.38)]"
          : "dark:border-slate-900"
      }`}
    >
      <h3
        className={`text-2xl ${
          isActive ? "dark:text-cyan-300" : "text-slate-500"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-sm text-slate-500 ${
          isActive ? "dark:text-cyan-300" : "text-slate-500"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}
