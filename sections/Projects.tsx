import React from "react";
import { projectDetails, IProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTItle";

export default function Projects() {
  return (
    <div className="dark:bg-slate-950">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-16">
        <SectionTitle text="Projects" />
        {projectDetails.map(
          (
            { title, website, image, techsUsed, about, logo, github }: IProjects,
            idx: number
          ) => (
            <ProjectCard
              about={about}
              title={title}
              website={website}
              image={image}
              techsUsed={techsUsed}
              index={idx}
              logo={logo}
              github={github}
            />
          )
        )}
      </div>
    </div>
  );
}
