"use client";

import React, { useState } from "react";
import { skillsAndExpertise } from "@/data";
import SkillTitle from "@/components/SkillTitle";
import SectionTitle from "@/components/SectionTItle";
import SkillDetails from "@/components/SkillDetails";
import { MotionDiv } from "@/components/MotionElements";

export default function SkillAndExperience() {
  const [currentSkillSelected, setCurrentSkillSelected] = useState(0);

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
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto dark:bg-slate-950">
        <SectionTitle text="My Expertise" />
        <div className="grid grid-cols-2 gap-y-4 gap-x-4">
          <div className="col-span-1 flex flex-col gap-2">
            {skillsAndExpertise.map((el, idx) => (
              <MotionDiv
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: idx * 0.25,
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
            skills={skillsAndExpertise[currentSkillSelected].skills}
          />
        </div>
      </div>
    </div>
  );
}
