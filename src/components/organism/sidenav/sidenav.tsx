import Link from "next/link";
import React from "react";
import NavLinks from "~/components/molecules/nav/navlink";
import { Button } from "~/components/atoms/button/button";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const SideNav = () => {
  return (
    <div className="flex h-screen flex-col justify-between items-center px-3 py-6 bg-background text-foreground">
      <Link className="w-full text-center" href="/">
        <h1 className="text-3xl font-bold">S.</h1>
      </Link>
      <div className="flex flex-col gap-6 h-auto rounded-full bg-indigo-50 p-1">
        <NavLinks />
      </div>
      <form className="flex flex-col bg-indigo-100 rounded-full p-1">
        <Avatar>
          <AvatarImage
            src="https://blush.design/api/download?shareUri=HA5VV1Uaw&c=Hair_0%7Eff7475_Skin_0%7Ee7915c_Top_0%7Eff7475&bg=8358d0&w=800&h=800&fm=png"
            alt="avatar"
          />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <Button className="rounded-full px-0 bg-transparent text-foreground">
          <ArrowRightStartOnRectangleIcon className="w-5" />
        </Button>
      </form>
    </div>
  );
};

export default SideNav;
