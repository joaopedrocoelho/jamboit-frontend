import React from "react";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-screen h-screen">{children}</div>;
}
