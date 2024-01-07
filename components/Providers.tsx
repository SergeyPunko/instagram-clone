"use client";

import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider className="flex flex-col md:flex-row h-full">
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};
