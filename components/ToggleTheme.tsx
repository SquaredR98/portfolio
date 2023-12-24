"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleChangeTheme = () => {
    if(theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    console.log('THEME', theme)
  }

  return (
    <button
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? (
        <MdLightMode className="text-2xl hover:cursor-pointer text-white transition-all ml-2" />
      ) : (
        <MdDarkMode className="text-2xl hover:cursor-pointer transition-all ml-2" />
      )}
    </button>
  );
};

export default ToggleTheme;
