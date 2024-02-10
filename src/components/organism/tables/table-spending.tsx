import React from "react";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import Image from "next/image";

const spending = [
  {
    id: "SPEN001",
    name: "Online Store",
    icon: "/online_shop.svg",
    totalAmount: "$250.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
  {
    id: "SPEN002",
    name: "Pay The Hospital",
    icon: "/medicin.svg",
    totalAmount: "$150.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
  {
    id: "SPEN003",
    name: "Tickets",
    icon: "/map.svg",
    totalAmount: "$350.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
];

const TableSpending = () => {
  return (
    <Table>
      <TableBody>
        {spending.map((data) => (
          <TableRow key={data.id} className="flex justify-between items-center">
            <TableCell className="flex gap-2">
              <Image
                src={data.icon}
                alt="Money"
                width={100}
                height={100}
                className="w-[50px] h-[50px]"
              />
              <section className="flex flex-col justify-center items-start">
                <p className="font-semibold text-sm">{data.name}</p>
                <p className="text-xs font-extralight text-neutral-500">
                  {data.date}
                </p>
              </section>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSpending;
