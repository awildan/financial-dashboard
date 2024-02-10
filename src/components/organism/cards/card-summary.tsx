import React from "react";
import Progress from "~/components/atoms/progress-bar/progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardSubTitle,
} from "~/components/molecules/card/card";

const CardSummary = () => {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Expenses and Income</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center px-4 pb-4">
        <div className="flex flex-col">
          <h3 className="font-medium text-sm">Expenses</h3>
          <p className="font-medium text-xl">66%</p>
          <p className="font-extralight text-neutral-500 text-xs">4.120</p>
        </div>
        <p className="font-semibold">VS</p>
        <div className="flex flex-col text-right">
          <h3 className="font-medium text-sm">Income</h3>
          <p className="font-medium text-xl">34%</p>
          <p className="font-extralight text-neutral-500 text-xs">2.120</p>
        </div>
      </CardContent>
      <CardFooter className="px-4">
        <Progress value={66} />
      </CardFooter>
    </Card>
  );
};

export default CardSummary;
