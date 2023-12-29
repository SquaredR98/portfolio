"use client";

import React, { useState } from "react";
import { skillsAndExpertise } from "@/data";
import SkillTitle from "@/components/SkillTitle";
import SectionTitle from "@/components/SectionTItle";
import SkillDetails from "@/components/SkillDetails";
import { MotionDiv } from "@/components/MotionElements";
import { useInView } from "react-intersection-observer";

export default function SkillAndExpertise() {
  const [currentSkillSelected, setCurrentSkillSelected] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  const variants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="dark:bg-slate-950">
      <div className={`w-11/12 md:w-10/12 lg:w-9/12 mx-auto dark:bg-slate-950 my-8 mb-16 ${inView ? "animate" : ""}`}>
        <SectionTitle text="My Expertise" inView={inView} />
        <div className="grid grid-cols-2 gap-y-4 gap-x-4" ref={ref}>
          <div className="col-span-1 flex flex-col gap-2 gap-y-4">
            {skillsAndExpertise.map((el, idx) => (
              <MotionDiv
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                key={idx}
                onClick={() => setCurrentSkillSelected(idx)}
              >
                <SkillTitle
                  name={el.name}
                  desc={el.desc}
                  isActive={idx === currentSkillSelected}
                />
              </MotionDiv>
            ))}
          </div>
          <SkillDetails
            key={currentSkillSelected}
            skills={skillsAndExpertise[currentSkillSelected].skills}
            inView={inView}
          />
        </div>
      </div>
    </div>
  );
}
