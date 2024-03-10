import React from "react";
import { projectDetails, IProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTItle";
import { MotionH3, MotionH4 } from "../components/MotionElements";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <section id="projects" className="dark:bg-slate-950">
      <div className="w-11/12 lg:w-9/12 mx-auto my-16">
        <SectionTitle text="Projects" />
        <div className="flex flex-col-reverse lg:flex-row mt-8">
          <div className="w-full lg:w-1/2">
            <MotionH3
              className={`text-3xl text-gray-700 dark:text-white tracking-wide font-bold relative z-[1]`}
            >
              Foodaholix Landing Page
            </MotionH3>
            <a
              target="_blank"
              href="https://foodaholix.com"
              className={`text-lg font-[400] ${poppins.className}`}
            >
              foodaholix.com
            </a>
            <ul
              className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1]`}
            >
              <li>A landing page for the food rating app call Foodaholix.</li>
              <li>
                Website includes blog but with static content without any blog
                CMS using only JSON.
              </li>
              <li>
                I worked on translating the legacy HTML & CSS code to the
                updated React and Gatsby.
              </li>
              <li>
                Initially the styling was done with Styled Components but later
                on translated to tailwindCSS by me for better UI.
              </li>
              <li>
                The project has been developed using the following technologies:
                ReactJS, GatsbyJS, Styled Components, TailwindCSS
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-4 mb-8 lg:mb-0">
            <div className="relative p-1 border dark:border-white/30 rounded-lg mt-4">
              <Image
                src="/foodaholix.png"
                alt="Foodaholix Landing"
                height={400}
                width={600}
                className="w-full h-full rounded-md lg:opacity-80 lg:dark:opacity-60 lg:dark:hover:opacity-100 lg:hover:opacity-100 transition-all ease-in-out duration-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-8">
          <div className="lg:w-1/2">
            <MotionH3
              className={`text-3xl text-gray-700 dark:text-white tracking-wide font-bold relative z-[1]`}
            >
              Movie Finder
            </MotionH3>
            <a
              target="_blank"
              href="https://movie-finder-amber.vercel.app/"
              className={`text-lg font-[400] ${poppins.className}`}
            >
              live demo
            </a>
            <ul
              className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1]`}
            >
              <li>Find all movies and TV Shows. Search and see rating and details of each one.</li>
              <li>
                Developed using React & NextJS with server components for SSR.
              </li>
              <li>
                Styled with the help of TailwindCSS
              </li>
              <li>
                My personal project to showcase the NextJS and API integration skills
              </li>
              <li>
                The project has been developed using the following technologies:
                ReactJS, NextJS, App Router, TailwindCSS, TMDB API
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-4 mb-8">
            <div className="relative p-1 border dark:border-white/30 rounded-lg mt-4">
              <Image
                src="/home/movieapp.webp"
                alt="Foodaholix Landing"
                height={400}
                width={600}
                className="w-full h-full rounded-md lg:opacity-80 lg:dark:opacity-60 lg:dark:hover:opacity-100 lg:hover:opacity-100 transition-all ease-in-out duration-500"
              />
            </div>
          </div>
        </div>

        <div className={`flex justify-end my-4 ${poppins.className}`}>
          <Link
            className="hover:opacity-80 text-slate-900 dark:text-white"
            href="/portfolio"
          >
            ...Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
