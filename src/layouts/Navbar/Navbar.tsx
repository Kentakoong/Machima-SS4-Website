/* eslint-disable @next/next/no-img-element */
import { MachimaLogo } from "@machima/components/Machima/Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-8 py-2">
      <div className="flex justify-between bg-white border drop-shadow-xl rounded-full px-4 py-2 w-full *:flex *:items-center">
        <div className="gap-2">
          <Link href="/">
            <MachimaLogo className="size-12 hover:scale-105 transition ease-in-out hover:drop-shadow-sm bg-white rounded-full" />
          </Link>
        </div>
        <div className="gap-4">
          {navList.map((it, idx) => (
            <Link key={idx} href={it.href}>
              {it.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const navList = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Awards",
    href: "/awards",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Moments",
    href: "/moments",
  },
  {
    title: "Team",
    href: "/team",
  },
];
