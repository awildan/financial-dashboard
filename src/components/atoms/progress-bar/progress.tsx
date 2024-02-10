import React from "react";
import { cn } from "~/lib/utils";
import { IProgressProps } from "./progress.types";

const Progress = ({ value = 0, color }: IProgressProps) => {
  return (
    <div className="flex space-x-0.5 w-full h-4">
      <div
        className={cn(
          "h-4 rounded-sm",
          color?.start ? color.start : "bg-indigo-500",
          value ? `w-[${value}%]` : "w-full"
        )}
        style={{ width: value ? `${value}%` : "100%" }}
      />
      <div
        className={cn(
          "h-4 rounded-sm",
          color?.finish ? color.finish : "bg-orange-400"
        )}
        style={{ width: value ? `${100 - value}%` : 0 }}
      />
    </div>
  );
};

export default Progress;
