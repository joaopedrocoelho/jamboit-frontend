"use client"
import "./globals.css";
import "./reset.css"
import Providers from "../providers/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Providers>
        <body className="">
          <div className="flex flex-col w-full h-full justify-center items-center">
          {children}
          </div>
          </body>
      </Providers>
    </html>
  );
}
