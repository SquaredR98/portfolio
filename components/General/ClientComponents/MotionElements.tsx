'use client';

import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Divider,
	Navbar,
	NavbarMenuItem,
	Tooltip,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const MotionP = motion.p;
export const MotionA = motion.a;
export const MotionH4 = motion.h4;
export const MotionH3 = motion.h3;
export const MotionH2 = motion.h2;
export const MotionH1 = motion.h1;
export const MotionImg = motion.img;
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionButton = motion.button;
export const MotionLi = motion.li;

export const MotionChip = motion(Chip);
export const MotionCard = motion(Card);
export const MotionLink = motion(Link);
export const MotionNav = motion(Navbar);
export const MotionImage = motion(Image);
export const MotionDivider = motion(Divider);
export const MotionTooltip = motion(Tooltip);
export const MotionCardBody = motion(CardBody);
export const MotionCardHeader = motion(CardHeader);
export const MotionCardFooter = motion(CardFooter);
export const MotionNavbarMenuItem = motion(NavbarMenuItem);
