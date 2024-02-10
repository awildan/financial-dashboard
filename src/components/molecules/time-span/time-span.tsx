import React from "react";
import DateTime from "~/components/atoms/date/date-time";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { addDays, format } from "date-fns";

function TimeSpan() {
  const date = new Date(2022, 6, 1, 5, 30);
  const currentTime = format(date, "HH : mm");
  const startDate = format(date, "EEE, dd MMMM");
  const endDate = format(addDays(date, 10), "EEE, dd MMMM");

  return (
    <div className="flex items-center gap-3">
      <DateTime time={currentTime} date={startDate} />
      <ChevronRightIcon className="w-6" />
      <DateTime time={currentTime} date={endDate} />
    </div>
  );
}

export default TimeSpan;
