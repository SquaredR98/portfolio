"use client";

import React from "react";
import { BsCodeSlash, BsFileEarmarkText } from "react-icons/bs";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarUi,
} from "@nextui-org/react";

import Logo from "@/components/Logo";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { MotionA, MotionNav, MotionNavbarMenuItem } from "./MotionElements";
import { socialLinks } from "../data";

const navItems = [
  {
    name: "Skills",
    url: "#skills",
    icon: <BsCodeSlash className="mr-2" />,
  },
  {
    name: "Experience",
    url: "#experience",
    icon: <BsFileEarmarkText className="mr-2" />,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: <BsCodeSlash className="mr-2" />,
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: <BsCodeSlash className="mr-2" />,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: <BsCodeSlash className="mr-2" />,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <MotionNav
      shouldHideOnScroll
      classNames={{ wrapper: "px-0 w-11/12 md:w-10/12 lg:8/12 mx-auto" }}
      className="dark:bg-slate-950/70 shadow-lg"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden justify-end outline-none"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link
              className="w-full group hover:dark:text-cyan-300 transition-all duration-300"
              href={item.url}
            >
              {item.name}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-slate-950 dark:bg-cyan-300"></span>
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="border-t dark:border-slate-700">
        {navItems.map((item, index) => (
          <MotionNavbarMenuItem
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.25,
              duration: 0.5,
              ease: "easeInOut",
            }}
            key={`${item.name}-${index}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link className="w-full dark:font-extralight" href={item.url}>
              {item.name}
            </Link>
          </MotionNavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex gap-2 mt-4">
          {socialLinks.map(({ Icon, link }, idx) => (
            <MotionA
              key={idx}
              target="_blank"
              href={link}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: idx * 0.5 + 0.6,
                duration: 0.5,
                ease: "easeInOut",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group border  border-slate-800 dark:border-slate-400 p-2 rounded-md dark:hover:border-cyan-300 transition-all duration-400 hover:shadow-lg hover:dark:shadow-black"
            >
              <Icon className="text-xl text-slate-800 hover:text-slate-950 dark:text-slate-400 group-hover:text-slate-950 group-hover:dark:text-cyan-300" />
            </MotionA>
          ))}
        </NavbarMenuItem>
      </NavbarMenu>
    </MotionNav>
  );
};

export default Navbar;
