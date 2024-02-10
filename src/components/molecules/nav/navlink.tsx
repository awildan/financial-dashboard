"use client";

import {
  HomeIcon,
  BellIcon,
  ClockIcon,
  UserIcon,
  WalletIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Notification", href: "/notification", icon: BellIcon },
  { name: "History", href: "/history", icon: ClockIcon },
  { name: "Users", href: "/users", icon: UserIcon },
  { name: "Wallet", href: "/wallet", icon: WalletIcon },
  { name: "Setting", href: "/setting", icon: Cog8ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-center rounded-full  hover:bg-indigo-400 hover:text-white flex-none p-2",
              {
                "bg-indigo-500 text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-5" />
            {/* <p className="hidden md:block">{link.name}</p> */}
          </Link>
        );
      })}
    </>
  );
}
