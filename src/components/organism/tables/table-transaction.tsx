import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Button } from "~/components/atoms/button/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "~/components/ui/table";
import { receiverAvatar, senderAvatar } from "~/lib/constant";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const invoices = [
  {
    invoice: "INV001",
    name: "Awil",
    avatar: senderAvatar,
    totalAmount: "$250.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
  {
    invoice: "INV002",
    name: "Wildan",
    avatar: receiverAvatar,
    totalAmount: "$150.00",
    date: "22, Feb 2024",
    isIncome: true,
  },
  {
    invoice: "INV003",
    name: "Firman",
    avatar: senderAvatar,
    totalAmount: "$350.00",
    date: "22, Feb 2024",
    isIncome: true,
  },
  {
    invoice: "INV004",
    name: "Syah",
    avatar: receiverAvatar,
    totalAmount: "$450.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
  {
    invoice: "INV005",
    name: "Petra",
    avatar: senderAvatar,
    totalAmount: "$550.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
  {
    invoice: "INV006",
    name: "Judika",
    avatar: receiverAvatar,
    totalAmount: "$200.00",
    date: "22, Feb 2024",
    isIncome: true,
  },
  {
    invoice: "INV007",
    name: "Ariel",
    avatar: senderAvatar,
    totalAmount: "$300.00",
    date: "22, Feb 2024",
    isIncome: false,
  },
];

const TableTransaction = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="flex justify-between items-center"
          >
            <TableCell className="font-medium flex gap-2">
              <Avatar>
                <AvatarImage src={invoice.avatar} alt="avatar" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <section className="flex flex-col">
                <p className="font-semibold text-sm">{invoice.name}</p>
                <p className="text-xs font-extralight text-neutral-500">
                  {invoice.date}
                </p>
              </section>
            </TableCell>
            <TableCell className="text-right">
              {invoice.isIncome ? "+" : "-"}
              {invoice.totalAmount}
            </TableCell>
            <TableCell className="text-right">
              <Button className="px-2 bg-transparent">
                <EllipsisVerticalIcon className="w-5 text-black" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableTransaction;
