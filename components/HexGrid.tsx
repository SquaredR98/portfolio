"use client"

import React from "react";
import { MotionImg } from "./MotionElements";

const nodeLogo = "/logos/nodejs.svg";
const linuxLogo = "/logos/linux.svg";
const serverLogo = "/logos/server.svg";
const codeLogo = "/logos/code.svg";
const pythonLogo = "/logos/python.svg";
const reactLogo = "/logos/react.svg";
const dockerLogo = "/logos/docker.svg";

const logos = [
  nodeLogo,
  linuxLogo,
  serverLogo,
  codeLogo,
  pythonLogo,
  reactLogo,
  dockerLogo,
];

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const HexGrid = ({ inView }: any) => {
  return (
    <div className="gallery">
      {logos.map((logo, index) => (
        <MotionImg
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: index * 0.05, ease: "easeInOut", duration: 0.5 }}
          src={logo}
          alt="logo"
          width={100}
          height={100}
          key={index}
        />
      ))}
    </div>
  );
};

export default HexGrid;
