"use client"

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export interface IHamburgerMenuProps {
  setShowMenu: (showMenu: boolean) => void;
  showMenu: boolean;
}

export default function HambergerMenu({
  setShowMenu,
  showMenu,
}: IHamburgerMenuProps) {
  return (
    <RxHamburgerMenu
      className={`text-2xl md:hidden hover:cursor-pointer dark:text-cyan-300`}
      onClick={() => setShowMenu(!showMenu)}
    />
  );
}
