"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextUiThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

interface IProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: IProviderProps) {
  return (
    <NextUIProvider>
      <NextUiThemeProvider attribute="class" defaultTheme="dark">{children}</NextUiThemeProvider>
    </NextUIProvider>
  );
}
