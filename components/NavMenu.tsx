"use client";

import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { PiCompassBold } from "react-icons/pi";
import { LuClapperboard } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Tooltip } from "@nextui-org/react";

const links = [
  { name: "Home", href: "/", icon: GoHomeFill },
  {
    name: "Search",
    href: "/search",
    icon: IoSearchOutline,
    hideOnMobile: true
  },
  { name: "Explore", href: "/explore", icon: PiCompassBold },
  {
    name: "Reels",
    href: "/reels",
    icon: LuClapperboard
  },
  {
    name: "Messages",
    href: "/messages",
    icon: AiOutlineMessage
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: FaRegHeart,
    hideOnMobile: true
  },
  {
    name: "Create",
    href: "/create",
    icon: FiPlusSquare
  }
];

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Tooltip
            key={link.name}
            content={link.name}
            placement="right"
            delay={500}
            closeDelay={0}
            radius="sm"
            showArrow={true}
            className="p-2"
          >
            <Link
              href={link.href}
              className={classNames("side-bar__item", {
                "hidden md:flex": link.hideOnMobile
              })}
            >
              <LinkIcon className="h-6 w-6 group-hover:scale-105" />
              <span
                className={classNames("hidden lg:block", {
                  "font-bold": isActive
                })}
              >
                {link.name}
              </span>
            </Link>
          </Tooltip>
        );
      })}
    </>
  );
};
