import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/molecules/card/card";
import TableTransaction from "../tables/table-transaction";
import { Button } from "~/components/atoms/button/button";

const CartTransaction = () => {
  return (
    <Card className="bg-white w-1/2 max-h-[480px] flex flex-col caret-transparent">
      <CardHeader className="py-4">
        <CardTitle>
          <div className="flex justify-between items-center gap-2">
            <span className="flex-1">Last Transaction</span>
            <Button className="bg-transparent text-foreground hover:text-white h-8 px-2">
              Newest
            </Button>
            <Button className="bg-transparent text-foreground hover:text-white h-8 px-2 ">
              Oldest
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grow overflow-y-auto">
        <TableTransaction />
      </CardContent>
      <CardFooter className="items-end"></CardFooter>
    </Card>
  );
};

export default CartTransaction;
