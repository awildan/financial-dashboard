"use client";

import React from "react";
import { ICheckboxProps } from "./checkbox.types";
import { twMerge } from "tailwind-merge";

const Checkbox = ({
  id,
  name,
  value = "",
  checked = false,
  label,
  disabled,
  onChange,
  className,
  ...props
}: ICheckboxProps) => {
  return (
    <>
      <div className={twMerge("flex items-center p-1", className)}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          value={value}
          className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 accent-indigo-500 hover:accent-indigo-400"
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="ms-2 text-xs font-semibold text-gray-800"
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
};

export default Checkbox;
