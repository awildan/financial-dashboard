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
import {
  EllipsisVerticalIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "~/components/atoms/button/button";
import TableSpending from "../tables/table-spending";
import Link from "next/link";

const CardSpending = () => {
  return (
    <Card className="caret-transparent">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center justify-between">
          <p className="text-lg">Latest Spending</p>
          <Button className="px-2 bg-transparent text-right h-8">
            <EllipsisVerticalIcon className="w-5 text-black " />
          </Button>
        </CardTitle>
        {/* <CardSubTitle>Card Description</CardSubTitle> */}
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <TableSpending />
      </CardContent>
      <CardFooter className="px-4 pb-4 justify-center w-full">
        <Link href="/" className="inline-flex gap-1 text-sm text-indigo-500">
          View All
          <ArrowRightIcon className="w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardSpending;
