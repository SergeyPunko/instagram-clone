import { Logo } from "./Logo";
import { MoreMenu } from "./MoreMenu";
import { NavMenu } from "./NavMenu";

export const SideBar = () => {
  return (
    <aside className="flex h-full flex-col w-[calc(4.5rem + 1px)] md:px-3 md:pt-2 md:pb-5 lg:w-60 md:border-r border-main">
      <Logo />
      <NavMenu />
      <MoreMenu />
    </aside>
  );
};
