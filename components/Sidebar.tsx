"use client";

import React, { ReactNode, useEffect, useRef } from "react";

export interface ISidebarClientComponentProps {
  children: ReactNode;
  handleShowMenu: () => void;
}

export default function Sidebar({
  children,
  handleShowMenu,
}: ISidebarClientComponentProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (!sidebarRef.current?.contains(event.target)) {
        handleShowMenu();
      }
      document.addEventListener("click", handler, true);

      return () => {
        document.addEventListener("click", handler);
      };
    };
  }, []);

  return <div ref={sidebarRef}>{children}</div>;
}
