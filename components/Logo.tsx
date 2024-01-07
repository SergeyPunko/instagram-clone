import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { LemonFont } from "../lib/fonts";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="sm:mt-4 lg:mt-5 side-bar__item sm:mb-7 lg:p-2 lg:hover:!bg-transparent"
    >
      <FaInstagram className="h-6 w-6 shrink-0 lg:hidden text-inherit" />
      <span
        className={`font-semibold text-lg hidden lg:block ${LemonFont.className}`}
      >
        Inst Clone
      </span>
    </Link>
  );
};
