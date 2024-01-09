"use client";

import css from "classnames";
import { forwardRef, useState } from "react";

type InputProps = any & {
  className?: string;
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...restProps }, ref) => {
    const [inputType, setInputType] = useState(type);
    return (
      <label className={css(className, "relative group cursor-text")}>
        <input
          ref={ref}
          type={inputType}
          placeholder=" "
          className="text-primary-text text-xs border border-main w-full pt-3 pb-1 px-2 group-focus-within:pt-3 group-focus-within:pb-1 peer placeholder-shown:p-2 outline-none focus-visible:border-gray-400"
          {...restProps}
        />
        <span className="text-xs text-secondary-text absolute peer-placeholder-shown:scale-100 scale-80 peer-focus:scale-80 peer-placeholder-shown:top-1/2 peer-focus:top-2 origin-left top-2 left-2 -translate-y-1/2 transition-all duration-300">
          {label}
        </span>
        {true && type === "password" && (
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold cursor-pointer"
            onClick={() =>
              inputType === "password"
                ? setInputType("text")
                : setInputType("password")
            }
          >
            {inputType === "password" ? "Show" : "Hide"}
          </span>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";
