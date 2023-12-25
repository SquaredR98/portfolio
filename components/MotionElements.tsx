"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Component = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} />
));
const MotionComponent = motion(Component);

export const MotionDiv = motion.div;
export const MotionImg = motion.img;
export const MotionButton = motion.button;
export const MotionH2 = motion.h2;
export const MotionH1 = motion.h1;
export const MotionNav = motion.nav;
export const MotionLink = motion(Link);
