"use client";

import { addDays } from "date-fns";
import { Card, CardContent } from "~/components/molecules/card/card";
import { Calendar } from "~/components/ui/calendar";

const start = new Date(2023, 5, 5);

export function CardsCalendar() {
  return (
    <Card className="bg-white">
      <CardContent className="p-0">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={start}
          selected={{
            from: start,
            to: addDays(start, 8),
          }}
        />
      </CardContent>
    </Card>
  );
}
