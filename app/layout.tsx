import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import Navbar from "../components/Navbar";
import Providers from "./Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const firaSansCondensed = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ravi Ranjan | Software Developer | Full Stack Developer",
  description:
    "Experienced Full Stack Developer with over 2.5 years of expertise across diverse domains, including social media, IoT, finance, and more. Specializing in NodeJS, ReactJS, and DevOps practices, I excel in crafting secure, scalable solutions. From implementing JWT-based authentication to orchestrating containers with Docker and Kubernetes, I bring a versatile skill set to every project. Proactive problem solver, adept at meeting deadlines and seamlessly integrating client-driven design changes. Elevate your digital experience with my passion for creating innovative and efficient solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${firaSansCondensed.className} bg-white dark:bg-slate-900`}
      >
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
