"use client";

import React, { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsCodeSlash, BsFileEarmarkText } from "react-icons/bs";

import Logo from "@/components/Logo";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Sidebar from "./Sidebar";
import HambergerMenu from "./HambergerMenu";

export interface ILargeNavbarProps {
  darkMode: boolean;
  onClick: (darkMode: boolean) => {};
}
export interface ISmallNavbarProps {
  showMenu: boolean;
  handleShowMenu: () => void;
}

const navItems = [
  {
    name: "Resume",
    url: "resume",
    icon: <BsFileEarmarkText className="mr-2" />,
  },
  {
    name: "Devfolio",
    url: "devfolio",
    icon: <BsCodeSlash className="mr-2" />,
  },
  {
    name: "UI/UX",
    url: "ui-ux",
    icon: <BsCodeSlash className="mr-2" />,
  },
  {
    name: "Contact",
    url: "contact",
    icon: <BsCodeSlash className="mr-2" />,
  },
];

const BigScreenNavItems = () => {
  return (
    <div className="hidden md:flex items-center dark:bg-slate-950/0">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={`/${item.url}`}
          className="font-fira-sans-condensed font-light px-2 dark:text-white"
        >
          {item.name}
        </Link>
      ))}
      <ToggleTheme />
    </div>
  );
};
const SmallScreenNavItems = ({
  showMenu,
  handleShowMenu,
}: ISmallNavbarProps) => {
  return (
    <Sidebar handleShowMenu={handleShowMenu}>
      <div
        className={`md:hidden -top-5 absolute bg-white/80 dark:bg-slate-950/90 pr-2 backdrop-blur-md w-3/4 ${
          showMenu ? "-right-3" : "-right-[45rem]"
        }  transition-all duration-500 h-screen`}
      >
        <div className="flex justify-between items-center md:hidden mt-6">
          <h4 className="font-fira-sans-condensed font-light text-2xl pl-3 flex items-center dark:text-white">
            <CgMenuGridR className="mr-1" /> Navigate
          </h4>
					<ToggleTheme />
        </div>
        <div className="mt-2">
          {navItems.map((item, index) => (
            <Link
              href={`/${item.url}`}
              className={`font-fira-sans-condensed font-light pl-4 last:mr-0 py-2 text-xl flex items-center dark:text-white `}
              key={index}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="fixed top-0 z-50 w-screen bg-white dark:bg-slate-950 before:w-full before:h-full before:z-[-1] before:backdrop-filter-lg before:content-[''] py-2">
      <div className="flex justify-between items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto relative">
        <Link href="/">
          <Logo />
        </Link>
        <div className="">
          <HambergerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          <BigScreenNavItems />
          <SmallScreenNavItems
            showMenu={showMenu}
            handleShowMenu={handleShowMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
