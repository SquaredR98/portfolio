"use client"
import React from "react";
import { IExperience } from "../data";
import {
  MotionCard,
  MotionCardBody,
  MotionCardFooter,
  MotionCardHeader,
  MotionChip,
  MotionDivider,
  MotionImage,
} from "./MotionElements";
import { useInView } from "react-intersection-observer";

export default function ExperienceCard({
  company,
  designation,
  duration,
  skills,
  responsibilities,
  image,
  index,
}: IExperience & { index: number}) {
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });
  return (
    <div className="group" ref={ref}>
      <MotionCard
        className="w-full my-8 bg-cyan-50/50 dark:bg-slate-950 border dark:border-slate-900 group-hover:dark:border-slate-700 transition-all duration-400 shadow-none group-hover:shadow-lg group-hover:dark:shadow-black/70 group-hover:dark:bg-slate-900/80"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      >
        <MotionCardHeader className="flex gap-3">
          <MotionImage
            alt="nextui logo"
            height={40}
            // radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-lg group-hover:text-cyan-800 group-hover:dark:text-cyan-300/70 transition-all duration-400">
              <span className="font-bold tracking-wider">{designation}</span> - {company}
            </p>
            <p className="text-small text-default-500">{duration}</p>
          </div>
        </MotionCardHeader>
        <MotionDivider />
        <MotionCardBody className="">
          <div>
            <ul className="list-disc list-outside pl-6">
              {responsibilities.map((el, idx) => (
                <li key={idx} className="dark:font-extralight my-1 tracking-wide text-gray-600 dark:text-slate-400 group-hover:text-slate-900 group-hover:dark:text-white">{el}</li>
              ))}
            </ul>
          </div>
        </MotionCardBody>
        <MotionDivider />
        <MotionCardFooter className="gap-2 my-2 flex-wrap">
          {skills.map(({ Icon, title }, idx) => (
            <MotionChip key={idx} size="sm" className="dark:bg-slate-900 group-hover:dark:bg-slate-950">
              <span className="flex items-center px-2 dark:font-extralight tracking-wide">
                <Icon className="w-4 text-xl mr-2" />
                {title}
              </span>
            </MotionChip>
          ))}
        </MotionCardFooter>
      </MotionCard>
    </div>
  );
}
