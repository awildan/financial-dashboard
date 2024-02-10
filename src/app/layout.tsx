import type { Metadata } from "next";
import "./globals.css";
import SideNav from "~/components/organism/sidenav/sidenav";
import { poppins } from "~/lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // flex h-screen flex-col md:flex-row md:overflow-hidden
  return (
    <html lang="en">
      <body
        className={`${poppins.className} container bg-indigo-50 text-foreground p-0`}
      >
        <div className="flex h-screen flex-row">
          <div className="w-20 flex-none fixed">
            <SideNav />
          </div>
          <div className="ml-20 flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}

