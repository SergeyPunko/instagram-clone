"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MoreMenu } from "./MoreMenu";
import { NavMenu } from "./NavMenu";
import { authPathnameses } from "@/lib/constants";

export const SideBar = () => {
  const pathname = usePathname();

  const isAuthPage = authPathnameses.some((authPathname) =>
    pathname.includes(authPathname)
  );

  if (isAuthPage) {
    return null;
  }

  return (
    <aside className="flex h-full flex-col w-[calc(4.5rem + 1px)] md:px-3 md:pt-2 md:pb-5 lg:w-60 md:border-r border-main">
      <Logo />
      <NavMenu />
      <MoreMenu />
    </aside>
  );
};
