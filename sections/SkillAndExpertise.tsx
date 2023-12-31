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
    triggerOnce: false,
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
      <div className={`w-11/12 md:w-10/12 lg:w-9/12 mx-auto dark:bg-slate-950 mb-24 ${inView ? "animate" : ""}`}>
        <SectionTitle text="Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-8" ref={ref}>
          <div className="col-span-1 flex flex-row md:flex-col gap-2 gap-y-4 overflow-x-scroll md:overflow-x-auto">
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
