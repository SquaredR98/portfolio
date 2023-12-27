// app/components/ThemeSwitcher.tsx
"use client";

"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    if(theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  if(!mounted) return null

  return (
    <div>
      <Switch
            defaultSelected
            color="secondary"
            className="dark:bg-slate-950"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onChange={handleClick}
          />
    </div>
  )
};