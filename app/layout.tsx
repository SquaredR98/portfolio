import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 min-h-screen">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
