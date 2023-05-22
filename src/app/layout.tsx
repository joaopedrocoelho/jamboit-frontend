"use client";
import "./globals.css";
import Providers from "../providers/Provider";
import localFont from "next/font/local";
import User from "@/components/user/User";

const golosNext = localFont({
  src: "./GolosText-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-golos",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={golosNext.variable}>
      <head />
      <Providers>
        <body className="flex flex-col items-center font-golos h-full">
          {children}
        </body>
      </Providers>
    </html>
  );
}
