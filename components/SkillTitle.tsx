import React from "react";
import { MotionCard } from "./MotionElements";

interface ISkillTitleProps {
  name: string;
  desc: string;
  isActive: boolean;
}

export default function SkillTitle({ name, desc, isActive }: ISkillTitleProps) {
  return (
    <MotionCard
      radius="none"
      className={`border px-2 py-1 hover:cursor-pointer transition-all group duration-400 ease-in-out dark:bg-slate-900 hover:[transform:rotateY(15deg)] ${
        isActive
          ? "border-slate-600 dark:border-cyan-300/40 shadow-md"
          : "dark:border-slate-900 hover:bg-gray-200/60 hover:dark:bg-slate-900/80"
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
        className={`text-sm dark:font-light text-slate-500 ${
          isActive ? "dark:text-white/60" : "text-slate-500"
        }`}
      >
        {desc}
      </p>
    </MotionCard>
  );
}
