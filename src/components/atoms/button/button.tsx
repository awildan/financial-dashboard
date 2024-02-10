import clsx from "clsx";
import { IButtonProps } from "./button.types";
import { twMerge } from "tailwind-merge";

export const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        clsx(
          "flex h-10 items-center justify-center rounded-lg bg-indigo-500 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:bg-indigo-600",
          !!props?.disabled && "cursor-not-allowed opacity-50"
        ),
        className
      )}
    >
      {children}
    </button>
  );
};
