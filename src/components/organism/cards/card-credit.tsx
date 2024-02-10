import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/molecules/card/card";

const CardCredit = () => {
  return (
    <Card className="!bg-indigo-500 bg-contain bg-center bg-visa-card bg-no-repeat min-w-[22rem] text-white flex flex-col">
      <CardHeader className="py-3">
        <CardTitle className="flex flex-row justify-between items-center text-2xl">
          <p>S.</p>
          <Image
            src="/visa.svg"
            alt="Money"
            width={100}
            height={100}
            className="w-[48px] h-[48px]"
          />
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-col grow justify-end items-start text-sm">
        <p>**** 1234</p>
        <div className="flex flex-row items-center justify-between w-full">
          <h3>Wildan F</h3>
          <p>12/24</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardCredit;
