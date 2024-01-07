"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Switch
} from "@nextui-org/react";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaBookmark } from "react-icons/lia";
import { TbSun } from "react-icons/tb";
import { LuActivitySquare } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { THEME } from "../types/theme";

export const MoreMenu = () => {
  const [isSubMenuOpened, toggleSubMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown placement="right-end" onClose={() => toggleSubMenu(false)}>
      <DropdownTrigger className="aria-expanded:scale-100 aria-expanded:opacity-100">
        <div className="mt-auto">
          <Tooltip
            content="More"
            placement="right"
            delay={500}
            closeDelay={0}
            radius="sm"
            showArrow={true}
            className="p-2"
          >
            <button className="side-bar__item outline-none">
              <HiOutlineMenu className="h-6 w-6" />
              <span className="hidden lg:inline">More</span>
            </button>
          </Tooltip>
        </div>
      </DropdownTrigger>
      {!isSubMenuOpened && (
        <DropdownMenu aria-label="menu" key="menu" className="w-[250px]">
          <DropdownItem
            key="settings"
            aria-label="Settings"
            className="p-0 hover:!bg-transparent"
          >
            <button className="side-bar__item m-0 p-4">
              <IoSettingsOutline className="h-[1.125rem] w-[1.125rem]" />
              <span>Settings</span>
            </button>
          </DropdownItem>
          <DropdownItem
            key="activity"
            aria-label="Your activity"
            className="p-0 hover:!bg-transparent"
          >
            <button className="side-bar__item m-0 p-4">
              <LuActivitySquare className="h-[1.125rem] w-[1.125rem]" />
              <span>Your activity</span>
            </button>
          </DropdownItem>
          <DropdownItem
            key="saved"
            aria-label="Saved"
            className="p-0 hover:!bg-transparent"
          >
            <button className="side-bar__item m-0 p-4">
              <LiaBookmark className="h-[1.125rem] w-[1.125rem]" />
              <span>Saved</span>
            </button>
          </DropdownItem>
          <DropdownItem
            key="switch-theme"
            aria-label="Switch appearance"
            isReadOnly
            showDivider
            onClick={() => toggleSubMenu(true)}
            className="p-0 hover:!bg-transparent after:bg-separator after:-left-2 after:-right-2 after:h-1 mb-2 after:-bottom-3"
          >
            <button className="side-bar__item m-0 p-4">
              {theme === THEME.Light ? (
                <TbSun className="h-[1.125rem] w-[1.125rem]" />
              ) : (
                <FaMoon className="h-[1.125rem] w-[1.125rem]" />
              )}
              <span>Switch appearance</span>
            </button>
          </DropdownItem>
          <DropdownItem
            key="switch-account"
            aria-label="Switch account"
            showDivider
            className="side-bar__item p-4 after:bg-separator after:-left-2 after:-right-2 m-0 mt-[.625rem] mb-2 after:-bottom-2"
          >
            Switch account
          </DropdownItem>
          <DropdownItem
            key="logout"
            aria-label="Log Out"
            className="side-bar__item p-4 m-0 mt-[0.375rem]"
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      )}
      {isSubMenuOpened && (
        <DropdownMenu
          key="submenu"
          aria-label="submenu"
          closeOnSelect={false}
          className="w-[250px]"
        >
          <DropdownItem
            key="Switch appearance"
            aria-label="Switch appearance"
            startContent={<IoIosArrowBack className="text-tertiary-icon" />}
            endContent={
              theme === THEME.Light ? (
                <TbSun className="h-[1.125rem] w-[1.125rem]" />
              ) : (
                <FaMoon className="h-[1.125rem] w-[1.125rem]" />
              )
            }
            showDivider
            onClick={() => toggleSubMenu(false)}
            className="hover:!bg-transparent p-2"
          >
            Switch appearance
          </DropdownItem>
          <DropdownItem
            key="theme"
            aria-label="theme"
            className="p-3 side-bar__item [&>_span]:block"
          >
            <Switch
              defaultSelected={theme === THEME.Dark}
              color="default"
              onValueChange={(isActive) =>
                setTheme(isActive ? THEME.Dark : THEME.Light)
              }
              size="sm"
              className="w-full"
            >
              Dark mode
            </Switch>
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};
