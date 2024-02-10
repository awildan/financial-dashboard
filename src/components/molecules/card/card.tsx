import React from "react";
import { TDiv, THeading, TParagraf } from "./card.types";
import { twMerge } from "tailwind-merge";

const Card = ({ className, ...props }: TDiv) => (
  <div
    className={twMerge("rounded-3xl border shadow-sm", className)}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: TDiv) => (
  <div
    className={twMerge("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: THeading) => (
  <h3
    className={twMerge("text-base font-semibold leading-none", className)}
    {...props}
  />
);

const CardSubTitle = ({ className, ...props }: TParagraf) => (
  <p className={twMerge("text-xs text-neutral-500", className)} {...props} />
);

const CardContent = ({ className, ...props }: TDiv) => (
  <div className={twMerge("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }: TDiv) => (
  <div
    className={twMerge("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export { Card, CardHeader, CardFooter, CardTitle, CardSubTitle, CardContent };

// How To Use
/* 
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardSubTitle>Card Description</CardSubTitle>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
 */
