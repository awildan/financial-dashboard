import type { Metadata } from "next";
import "./globals.css";
import SideNav from "~/components/organism/sidenav/sidenav";
import { poppins } from "~/lib/fonts";

export const metadata: Metadata = {
  title: "Financial Dashboard | Awil",
  description: "Created with love by awil 🥹",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} container bg-indigo-50 text-foreground p-0`}
      >
        <div className="flex h-screen flex-row">
          <div className="w-20 flex-none fixed z-10">
            <SideNav />
          </div>
          <div className="ml-20 flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}

