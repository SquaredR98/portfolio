"use client";
import React from "react";
import { IExperience, IProjects } from "../data";
import {
  MotionCard,
  MotionCardBody,
  MotionCardFooter,
  MotionCardHeader,
  MotionChip,
  MotionDivider,
  MotionImage,
  MotionTooltip,
} from "./MotionElements";
import { useInView } from "react-intersection-observer";
import { Image } from "@nextui-org/react";

export default function ProjectCard({
  title,
  about,
  website,
  github,
  techsUsed,
  image,
  index,
  logo,
}: IProjects & { index: number }) {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });
  return (
    <div className="group" ref={ref}>
      <MotionCard
        className="w-full my-8 hover:bg-cyan-50/50 border-gray-300 group-hover:border-gray-400 dark:bg-slate-950 border dark:border-slate-900 group-hover:dark:border-slate-700 transition-all duration-400 shadow-none group-hover:shadow-lg group-hover:dark:shadow-black/70 group-hover:dark:bg-slate-900/80"
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
            src={
              logo ||
              "https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            }
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-xl group-hover:text-cyan-600 group-hover:dark:text-cyan-300/70 transition-all duration-400">
              {title}
            </p>
            <a
              className="text-small text-default-500"
              href={`https://${website}`}
            >
              {website}
            </a>
          </div>
        </MotionCardHeader>
        <MotionDivider />
        <MotionCardBody className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2 order-last lg:order-first">
              <ul className="list-disc list-outside pl-6">
                {about.map((el, idx) => (
                  <li key={idx} className="dark:font-extralight my-1 tracking-wide text-gray-500 dark:text-slate-400 group-hover:text-slate-900 group-hover:dark:text-white">
                    {el}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap my-2 gap-2">
                {techsUsed.map((el, idx) => (
                  <MotionChip
                    key={idx}
                    size="sm"
                    className="dark:bg-slate-900 group-hover:dark:bg-slate-950 bg-gray-300/60 group-hover:bg-gray-300"
                  >
                    <span className="flex items-center px-2 dark:font-extralight tracking-wide">
                      {el}
                    </span>
                  </MotionChip>
                ))}
              </div>
            </div>
            <Image
              src={
                image ||
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              className="h-full col-span-1"
            />
          </div>
        </MotionCardBody>
        <MotionDivider />
        <MotionCardFooter className="gap-2 my-2 flex-wrap">
          {github ? (
            <a href={github} target="_blank" className="hover:dark:text-cyan-300">Github Link</a>
          ) : (
            "Github is private. Can't be shared."
          )}
        </MotionCardFooter>
      </MotionCard>
    </div>
  );
}
