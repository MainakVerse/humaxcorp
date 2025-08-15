// root layout file (e.g., layout.tsx)
import type React from "react";
import type { Metadata } from "next";
import { Lora } from "next/font/google"; 

import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"], // optional
});

export const metadata: Metadata = {
  title: "HUMAX CORP",
  description: "Elevate Your Business with HUMAX CORP",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <body className="font-lora">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
