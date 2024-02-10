"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardSubTitle,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/molecules/card/card";
import { Button } from "~/components/atoms/button/button";
import { useEffect, useState } from "react";
import { CardSkeleton } from "~/components/molecules/card/card-skeleton";
import Checkbox from "~/components/atoms/checkbox/checkbox";
import CheckboxGroup from "~/components/molecules/checkbox-group/checkbox-group";
import DateTime from "~/components/atoms/date/date-time";
import TimeSpan from "~/components/molecules/time-span/time-span";
import { PlusIcon } from "@heroicons/react/24/outline";

const CardWishlist = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (val: boolean) => {
    setChecked(val);
  };
  return (
    <Card className="bg-white w-3/4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">List item to buy</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <TimeSpan />
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold">
            <span className="text-neutral-500 font-thin">0/3</span> shopping
            list
          </p>
          <Button className="px-2 bg-transparent text-foreground hover:text-white font-semibold text-xs">
            <PlusIcon className="w-3" /> <label> Add an item </label>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <CheckboxGroup
            id="macbook"
            name="macbook"
            label="Macbook"
            onChange={handleCheck}
            checked={checked}
          />
          <CheckboxGroup
            id="Iphone"
            name="Iphone"
            label="Iphone 15"
            onChange={handleCheck}
            checked={checked}
          />
          <CheckboxGroup
            id="samsung"
            name="samsung"
            label="Samsung Flip"
            onChange={handleCheck}
            checked={checked}
          />
          <CheckboxGroup
            id="coffee-machine"
            name="coffee machine"
            label="Coffee machine"
            onChange={handleCheck}
            checked={checked}
          />
          <CheckboxGroup
            id="sec-monitor"
            name="sec-monitor"
            label="2nd monitor"
            onChange={handleCheck}
            checked={checked}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardWishlist;
