"use client";

import React from "react";
import SectionTitle from "../components/SectionTItle";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data";
import { useInView } from "react-intersection-observer";
import {
  MotionH2,
  MotionH3,
  MotionH4,
  MotionP,
} from "../components/MotionElements";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "700"],
  subsets: ["latin"],
});

export default function Experience() {
  return (
    <section id="experience" className="dark:bg-slate-950">
      <div className="w-11/12 lg:w-9/12 mx-auto dark:bg-slate-950 my-16">
        <SectionTitle text="Recent Experience" />

        <MotionH3 className="text-3xl tracking-wide font-bold mt-8 relative z-[1]">
          Software Developer
        </MotionH3>
        <MotionH4 className="text-xl tracking-wide font-[500] relative z-[1]">
          Antino Labs -{" "}
          <span className="text-base font-[200]">April 2022 - Present</span>
        </MotionH4>

        <ul
          className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1]`}
        >
          <li className="my-1">
            Deliver high-quality, robust production code for a diverse array of
            projects for clients including INeuron, Devlabs Alliance, Casha,
            Travel Hangouts, Top Faculty, and more
          </li>
          <li className="my-1">
            Work alongside creative people to lead research, development and
            architecture of technical solutions to fulfill business
            requirements.
          </li>
          <li className="my-1">
            Collaborate with designers, project managers and other engineers to
            transform creative concepts into production realities for clients
            and stakeholders.
          </li>
          <li className="my-1">
            Lead multiple projects and provide training and mentorship to the
            new joinees in order to help them grow and learn quickly.
          </li>
        </ul>

        <MotionH3 className="text-2xl font-[600] tracking-wide mt-6">
          Projects Contributed
        </MotionH3>
        <div className="border dark:border-white/30 px-4 py-4 rounded-lg mt-2">
          <MotionH4 className={`text-xl ${poppins.className} font-bold`}>
            Neo Finity
          </MotionH4>
          <div>
            <p className={`${poppins.className} mt-2`}>What is the product?</p>
            <ul
              className={`${poppins.className} list-disc ml-6 font-[300] dark:font-[200]`}
            >
              <li>
                The product is a fintech application where users can load
                balance and make payments through cards and wearables making it
                advance payment solutions.
              </li>
            </ul>
          </div>
          <div>
            <p className={`${poppins.className} mt-2`}>My Contribution</p>
            <ul
              className={`${poppins.className} list-disc ml-6 font-[300] dark:font-[200]`}
            >
              <li>
                Implemented a feature called waitlist allowing users to sign up
                and sign in via OTP in react along with other necessary CRUD
                operation integrated into it.
              </li>
              <li>
                Translated the waitlist from react to nextjs due to SEO &
                product requirements.
              </li>
              <li>
                Translated the figma design for a neofinity landing page in
                nextjs along with smooth animations
              </li>
            </ul>
          </div>
          <div>
            <p className={`${poppins.className} mt-2`}>Tech Stack Used</p>
            <ul
              className={`${poppins.className} list-disc ml-6 font-[300] dark:font-[200]`}
            >
              <li>ReactJS, NodeJS, NextJS, TailwindCSS, API Integration</li>
            </ul>
          </div>
        </div>
        <div className="border dark:border-white/30 px-4 py-4 rounded-lg mt-6">
          <MotionH4 className={`text-xl ${poppins.className} font-bold`}>
            Track IT
          </MotionH4>
          <div>
            <p className={`${poppins.className} mt-2`}>What is the product?</p>
            <ul
              className={`${poppins.className} list-disc ml-6 font-[300] dark:font-[200]`}
            >
              <li>
                Confidential
              </li>
            </ul>
          </div>
          <div>
            <p className={`${poppins.className} mt-2`}>My Contribution</p>
            <ul
              className={`${poppins.className} list-disc ml-6 font-[300] dark:font-[200]`}
            >
              <li>
                Worked on the P2P video call feature implementation using WebRTC in React & Node.
              </li>
            </ul>
          </div>
          <div>
            <p className={`${poppins.className} mt-2`}>Tech Stack Used</p>
            <ul
              className={`${poppins.className} list-disc ml-6 font-[300] dark:font-[200]`}
            >
              <li>WebRTC, ReactJS, NodeJS, Socket.io, TailwindCSS</li>
            </ul>
          </div>
        </div>

        <div className={`flex justify-end my-4 ${poppins.className}`}>
          <Link className="hover:opacity-80 text-slate-900 dark:text-white" href="/about-me">...All Experiences</Link>
        </div>
      </div>
    </section>
  );
}
