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
  title: "Ravi Ranjan | Software Developer @ Antino Labs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaSansCondensed.className} bg-white dark:bg-slate-900`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
