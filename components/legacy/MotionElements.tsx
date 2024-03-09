"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Navbar,
  NavbarItem,
  NavbarMenuItem,
  Tooltip,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const MotionDiv = motion.div;
export const MotionImg = motion.img;
export const MotionA = motion.a;
export const MotionImage = motion(Image);
export const MotionButton = motion.button;
export const MotionH2 = motion.h2;
export const MotionH1 = motion.h1;
export const MotionNav = motion(Navbar);
export const MotionLink = motion(Link);
export const MotionCard = motion(Card);
export const MotionSpan = motion.span;
export const MotionCardBody = motion(CardBody);
export const MotionCardHeader = motion(CardHeader);
export const MotionCardFooter = motion(CardFooter);
export const MotionDivider = motion(Divider);
export const MotionChip = motion(Chip);
export const MotionTooltip = motion(Tooltip);
export const MotionNavbarMenuItem = motion(NavbarMenuItem)
