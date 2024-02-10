import React from "react";
import { IDateTimeProps } from "./date-time.types";

const DateTime = ({ time = "00 : 00", date = "" }: IDateTimeProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-2xl">{time}</h3>
      <p className="text-xs font-thin text-neutral-500">{date}</p>
    </div>
  );
};

export default DateTime;
