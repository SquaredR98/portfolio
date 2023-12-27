import React from "react";
import { MotionDiv } from "./MotionElements";
import { ISkill } from "../data";
import { AnimatePresence } from "framer-motion";

interface ISkillsProps {
  skills: ISkill[];
}

export default function SkillDetails({ skills }: ISkillsProps) {
  return (
    <MotionDiv className="flex flex-wrap gap-4 my-2 ml-4">
      {skills.map((El, idx) => (
        <AnimatePresence >
        <MotionDiv
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, x: 10 }}
          transition={{
            delay: idx * 0.25 + 1,
            duration: 0.5,
          }}
          key={idx}
          className="flex flex-col items-center group gap-x-3"
        >
          <El.Icon
            className={`border border-slate-950 dark:border-slate-600 w-12 h-12 p-2 text-slate-600 text-3xl group-hover:text-slate-950 group-hover:dark:text-cyan-300 group-hover:dark:border-cyan-300 group-hover:shadow-xl group-hover:dark:shadow-cyan-300/20 transition-all duration-300`}
          />
          <p
            className={`text-slate-600 mt-2 group-hover:text-slate-950 group-hover:dark:text-cyan-300`}
          >
            {El.title}
          </p>
        </MotionDiv>
        </AnimatePresence>
      ))}
    </MotionDiv>
  );
}
