"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const months = [
  {
    value: "january",
    label: "January",
  },
  {
    value: "february",
    label: "February",
  },
  {
    value: "march",
    label: "March",
  },
  {
    value: "april",
    label: "April",
  },
  {
    value: "may",
    label: "May",
  },
  {
    value: "june",
    label: "June",
  },
  {
    value: "july",
    label: "July",
  },
  {
    value: "august",
    label: "August",
  },
  {
    value: "september",
    label: "September",
  },
  {
    value: "october",
    label: "October",
  },
  {
    value: "november",
    label: "November",
  },
  {
    value: "december",
    label: "December",
  },
];
const Combobox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          {value
            ? months.find((month) => month.value === value)?.label
            : "Filter"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Search Month" />
          <CommandEmpty>No Month found.</CommandEmpty>
          <CommandGroup>
            {months.map((month) => (
              <CommandItem
                key={month.value}
                value={month.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === month.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {month.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
