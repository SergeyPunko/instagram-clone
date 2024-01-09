"use client";

import { LemonFont } from "@/lib/fonts";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const RegisterForm = () => {
  return (
    <div className="flex-1 flex flex-col max-w-96 items-center">
      <Link
        href={"/"}
        className={`mb-3 mt-9 p-2 text-4xl ${LemonFont.className}`}
      >
        Inst Clone
      </Link>

      <p className="text-center mx-10 mb-3 text-secondary-text">
        Sign up to see photos and videos from your friends.
      </p>
    </div>
  );
};
