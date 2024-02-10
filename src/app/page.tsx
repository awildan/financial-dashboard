import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import RightContent from "~/components/templates/right-content";
import CardBalance from "~/components/organism/cards/card-balance";
import CardWishlist from "~/components/organism/cards/card-wishlist";
import { Button } from "~/components/atoms/button/button";
import { CardsCalendar } from "~/components/organism/cards/card-calendar";
import CardCredit from "~/components/organism/cards/card-credit";
import CardChat from "~/components/organism/cards/card-chat";
import CartTransaction from "~/components/organism/cards/card-transaction";
import CardSummary from "~/components/organism/cards/card-summary";
import CardSpending from "~/components/organism/cards/card-spending";
import CardUpgrade from "~/components/organism/cards/card-upgrade";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex">
        <div className="content flex flex-col p-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col space-y-1.5">
              <h1 className="text-3xl font-bold">Hello, Awil .F</h1>
              <p className="text-gray-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <Button className="px-0 rounded-full bg-white">
              <MagnifyingGlassIcon
                className="w-10 p-2 text-black hover:text-white"
                title="test"
              />
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <section className="flex w-full justify-between gap-6">
              <CardCredit />
              <CardBalance />
            </section>
            <section className="flex w-full gap-6">
              <CardWishlist />
              <CardsCalendar />
            </section>
            <section className="flex w-full">
              <CartTransaction />
              <CardChat />
            </section>
          </div>
        </div>
        <RightContent>
          <CardSummary />
          <CardSpending />
          <CardUpgrade />
        </RightContent>
      </div>
    </main>
  );
}

