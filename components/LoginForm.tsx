"use client";

import { LemonFont } from "@/lib/fonts";
import { signIn } from "next-auth/react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import { Input } from "./Input";
import { Divider } from "@nextui-org/react";
import { LoginSchema, loginSchema } from "@/lib/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const onSubmit = async (data: LoginSchema) => {
    signIn("credentials", {}, data);
  };
  return (
    <div className="flex-1 flex flex-col max-w-96 items-center py-10 border border-main">
      <Link
        href={"/"}
        className={`mb-3 mt-6 p-2 text-4xl ${LemonFont.className}`}
      >
        Inst Clone
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full px-10 mt-6"
      >
        <Input
          {...register("email")}
          type="text"
          autoComplete="username"
          label="Username or email"
          className="flex-1 mb-[6px]"
        />
        <Input
          {...register("password")}
          type="password"
          autoComplete="current-password"
          label="Password"
          className="flex-1 mb-[6px]"
        />
        <button
          disabled={isSubmitting}
          className=" px-4 py-2 bg-primary-button rounded-lg text-white my-2 text-sm"
          type="submit"
        >
          Log in
        </button>
      </form>

      <div className="flex items-center w-full px-10 mt-3 mb-4 gap-x-4">
        <div className="flex-1">
          <Divider orientation="horizontal" />
        </div>
        <span className=" font-semibold text-sm text-secondary-text">OR</span>
        <div className="flex-1">
          <Divider orientation="horizontal" />
        </div>
      </div>

      <div>{errors.root?.message}</div>

      <button
        disabled={isSubmitting}
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
        className="flex text-[#385185] items-center gap-2 text-sm font-semibold mb-3"
      >
        <FaSquareFacebook className="h-4 w-4" />
        Log in with Facebook
      </button>
      <button
        disabled={isSubmitting}
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="flex items-center gap-2 text-sm"
      >
        <FcGoogle className="h-4 w-4" />
        Log in with Google
      </button>
    </div>
  );
};
