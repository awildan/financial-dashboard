"use client";

import React from "react";
import { Button } from "~/components/atoms/button/button";
import Checkbox from "~/components/atoms/checkbox/checkbox";
import { ICheckboxProps } from "~/components/atoms/checkbox/checkbox.types";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

const CheckboxGroup = ({
  id,
  name,
  label,
  checked,
  onChange,
  className,
  ...props
}: ICheckboxProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between rounded-md bg-indigo-50 px-2 pr-0",
        className
      )}
    >
      <Checkbox
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        checked={checked}
      />
      <Button className="px-2 bg-transparent">
        <EllipsisVerticalIcon className="w-5 text-black" />
      </Button>
    </div>
  );
};

export default CheckboxGroup;
