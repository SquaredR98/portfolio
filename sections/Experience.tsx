"use client"

import React from "react";
import SectionTitle from "../components/SectionTItle";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto dark:bg-slate-950 my-16" >
      <SectionTitle text="Experiences" />
      {experiences.map(
        ({ company, designation, duration, skills, responsibilities, image }, idx) => (
          <ExperienceCard
            company={company}
            designation={designation}
            duration={duration}
            skills={skills}
            responsibilities={responsibilities}
            image={image}
            key={idx}
            index={idx}
          />
        )
      )}
    </div>
  );
}
