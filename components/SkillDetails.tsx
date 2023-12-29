import React from "react";
import { MotionCard, MotionDiv } from "./MotionElements";
import { ISkill } from "../data";

interface ISkillsProps {
  skills: ISkill[];
  inView: boolean
}

export default function SkillDetails({ skills, inView }: ISkillsProps) {
  return (
    <MotionCard
      variants={{
        hidden: {
          opacity: 0,
        },
        visible:  {
          opacity: 1,
        }
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: .5, ease: 'easeInOut', duration: .8 }}
      radius="none"
      className="dark:bg-slate-900 p-4 grid grid-cols-5 border dark:border-slate-700 rounded-md"
    >
      {skills.map(({ Icon, title }, idx) => (
        <MotionDiv
          variants={{
            hidden: { opacity: 0, x: 10, transform: 'rotateY(40deg)' },
            visible: { opacity: 1, x: 0, transform: 'rotateY(0)' },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, x: 10 }}
          transition={{
            delay: idx * 0.25 + 1,
            duration: 0.5,
          }}
          key={idx}
          className="group flex items-center flex-col"
        >
          <Icon
            className={`w-12 h-12 p-2 bg-none dark:text-slate-400 text-3xl group-hover:text-slate-950 group-hover:dark:text-cyan-300 group-hover:dark:border-cyan-300 group-hover:drop-shadow-[5px_5px_5px_rgba(0,0,0,.4)] group-hover:dark:drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] group-hover:dark:shadow-black transition-all duration-300`}
          />
          <p
            className={`dark:text-slate-400 mt-1 mb-2 group-hover:text-slate-950 group-hover:dark:text-cyan-300`}
          >
            {title}
          </p>
        </MotionDiv>
      ))}
    </MotionCard>
  );
}
