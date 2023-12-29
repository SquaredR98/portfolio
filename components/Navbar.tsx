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
import { MotionNav } from "./MotionElements";

const navItems = [
  {
    name: "Experience",
    url: "/experience",
    icon: <BsFileEarmarkText className="mr-2" />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: <BsCodeSlash className="mr-2" />,
  },
  // {
  //   name: "UI/UX",
  //   url: "ui-ux",
  //   icon: <BsCodeSlash className="mr-2" />,
  // },
  {
    name: "Resume",
    url: "/resume",
    icon: <BsCodeSlash className="mr-2" />,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: <BsCodeSlash className="mr-2" />,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <MotionNav
      variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
      initial='hidden'
      animate='visible'
      transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      classNames={{ wrapper: "px-0 w-11/12 md:w-10/12 lg:8/12 mx-auto" }}
      className="dark:bg-slate-950/70"
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
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

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link className="w-full" href={item.url}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </MotionNav>
  );
};

export default Navbar;
