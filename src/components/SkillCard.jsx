import React from "react";

import frontendImage from "../assets/bgs/frontend-bg.jpg";

const SkillCard = ({ title, skills }) => {
  console.log(title, skills, frontendImage);
  return (
    <div
      className="border p-4 z-[-2] dark:z-0 dark:border-none dark:bg-slate-900 shadow-lg relative"
      style={{
        backgroundImage: `url(${frontendImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/80 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-900/80 -z-[1]" />
      <h3 className="font-roboto-condensed mb-3 text-xl font-bold dark:text-cyan-300">
        {title}
      </h3>
      <div>
        <ul className="flex flex-wrap gap-1">
          {skills?.map(({ name, icon }, index) => (
            <li
              key={index}
              className="dark:text-white flex items-center bg-slate-200 dark:bg-slate-950 px-2 py-1 font-roboto-condensed"
            >
              {icon}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
