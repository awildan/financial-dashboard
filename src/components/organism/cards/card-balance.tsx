"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/molecules/card/card";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { CardSkeleton } from "~/components/molecules/card/card-skeleton";
import Combobox from "~/components/molecules/combobox/combobox";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 80) + 20,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 80) + 20,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 80) + 20,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 80) + 20,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 80) + 20,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 80) + 20,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 100) + 10,
  },
  // {
  //   name: "Aug",
  //   total: Math.floor(Math.random() * 100) + 10,
  // },
  // {
  //   name: "Sep",
  //   total: Math.floor(Math.random() * 100) + 10,
  // },
  // {
  //   name: "Oct",
  //   total: Math.floor(Math.random() * 100) + 10,
  // },
  // {
  //   name: "Nov",
  //   total: Math.floor(Math.random() * 100) + 10,
  // },
  // {
  //   name: "Dec",
  //   total: Math.floor(Math.random() * 100) + 10,
  // },
];

const CardBalance = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, []);

  if (!mounted) {
    return <CardSkeleton />;
  }
  return (
    <Card className="bg-white flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <CardTitle className="text-base font-semibold">
          Balance Statistic
        </CardTitle>
        <Combobox />
      </CardHeader>
      <CardContent className="flex grow">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold">$675</h3>
          <div className="flex justify-between items-center border-b gap-1 ">
            <Image
              src="https://blush.design/api/download?shareUri=MadFovFgY6SoGHWl&c=Hair_0%7E8b542f_Skin_0%7Ec09671&w=800&h=800&fm=png"
              alt="Money"
              width={100}
              height={100}
              className="w-[40px] h-[40px]"
            />
            <p className="text-xs font-extralight text-gray-500">
              Your total balance
            </p>
          </div>
          <div className="flex">
            <svg viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 235.49c66.6 1.137 199.8-79.864 333 5.681s199.8 432.931 333 422.046C799.2 652.33 865.8 285.04 999 186.744c133.2-98.295 199.8-98.925 333-15.003s199.8 340.86 333 434.613c133.2 93.753 266.4 27.322 333 34.153"
                fill="none"
                stroke="#6366F1"
                strokeWidth="15"
              />
            </svg>
            <div className="flex items-center">
              <ArrowUpCircleIcon className="w-4" />
              <p className="text-xs text-gray-500">+20.1%</p>
            </div>
          </div>
          <p className="text-xs font-extralight text-gray-500">
            Increase from last month
          </p>
        </div>
        <div className="mt-4 w-full">
          <ResponsiveContainer height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip />
              <Bar
                dataKey="total"
                radius={[4, 4, 0, 0]}
                className="fill-indigo-500"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardBalance;
