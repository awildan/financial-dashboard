import React from "react";
import { Button } from "~/components/atoms/button/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/molecules/card/card";
import Image from "next/image";

const CardUpgrade = () => {
  return (
    <Card>
      <CardHeader className="py-4">
        <CardTitle className="text-center">Go to Premium</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="/upgrade.svg"
          alt="Money"
          width={100}
          height={100}
          className="w-[80px] h-[80px]"
        />
        <h3 className="font-semibold">Need more features?</h3>
        <p className="font-light text-sm text-neutral-500">
          Update your account to premium to get more features
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CardUpgrade;
