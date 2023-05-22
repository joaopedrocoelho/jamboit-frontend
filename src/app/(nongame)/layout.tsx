"use client";
import "./globals.css";
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
    <>
      <header className="flex justify-center w-full px-12 mb-6">
        <h1 className=" font-black text-6xl my-4 text-primary-1000">Jamboit</h1>
        <User />
      </header>
      <main className="flex flex-col justify-center items-center w-full  max-h-fit ">
        {children}
      </main>
      <footer className="flex w-full my-14 items-center ">
        <p className="py-12 px-6 m-auto">
          Made by
          <a
            className="text-primary-700 underline ml-2 hover:no-underline"
            href="https://www.pedrocoelhodev.com"
            target="_blank"
          >
            Pedro Coelho
          </a>
        </p>
      </footer>
    </>
  );
}
