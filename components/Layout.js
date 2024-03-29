import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full bg-slate-300 w-full">
        <header>
          <nav className="bg-yellow-600 uppercase text-white text-2xl py-6">
            <div
              className={
                "lg:inline-flex lg:w-auto mt-2 lg:mt-0 list-none sm:hidden"
              }
            >
              <ul className="md:mx-40 flex flex-col md:flex-row md:space-x-10 space-y-2 md:space-y-0">
                <li
                  className="hover:text-black focus:text-black"
                  key={children.id}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className="hover:text-black focus:text-black"
                  key={children.id}
                >
                  <Link href="/HistoricalStandings">Historical Standings</Link>
                </li>
                <li className="hover:text-black" key={children.id}>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://docs.google.com/spreadsheets/d/1Oh1bDNljCzt2LqX_BnXgkgj99naXJ0rCGoIacx-Xhd0/edit#gid=1043776464"
                  >
                    Drafts and Trades
                  </a>
                </li>
                <li className="hover:text-black" key={children.id}>
                  <Link href="/RuleChanges">Rule Changes</Link>
                </li>
                <li className="hover:text-black" key={children.id}>
                  <Link href="/EndSeasonRosters">
                    2022 End of Season Rosters
                  </Link>
                </li>
                <li className="hover:text-black" key={children.id}>
                  <Link href="/Keepers">Keeper Claims and XFL</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-purple-600">
          <div className="flex items-center justify-center">
            <p>Created by the resident Dark Lord</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
