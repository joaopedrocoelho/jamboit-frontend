"use client";
import "./globals.css";
import "./reset.css";
import Providers from "../providers/Provider";
import localFont from "next/font/local";

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
        <body
          className="flex flex-col w-full h-full items-center font-golos"
        >
          <header className="flex justify-center w-full">
            <h1 className=" font-black text-6xl my-8 text-primary-1000">Jamboit</h1>
          </header>
          <main className="flex flex-col justify-center items-center w-full">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
