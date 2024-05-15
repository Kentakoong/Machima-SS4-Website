"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MachimaLogo } from "@machima/components/Machima/Logo";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 py-2 md:px-8">
      <Menu>
        {({ open }) => (
          <div className="flex w-full flex-col justify-between rounded-3xl border bg-white px-4 py-2 drop-shadow-xl *:flex *:items-center sm:flex-row sm:rounded-full">
            <div className="flex justify-between gap-2 sm:justify-start">
              <Link href="/">
                <MachimaLogo className="size-12 rounded-full bg-white transition ease-in-out hover:scale-105 hover:drop-shadow-sm" />
              </Link>
              <MenuButton
                className={`${open ? "rotate-90" : ""} transition sm:hidden`}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <XMarkIcon className="size-6" />
                ) : (
                  <Bars3Icon className="size-6" />
                )}
              </MenuButton>
            </div>
            <div>
              <MenuItems className="flex w-full justify-center text-center sm:hidden">
                <div
                  className={`${
                    !open ? "hidden sm:flex" : "flex"
                  } mt-2 w-full flex-col sm:mt-0 sm:flex-row`}
                >
                  {navList.map((it, idx) => (
                    <MenuItem key={idx}>
                      <Link
                        className="w-full rounded-lg py-2 transition hover:bg-gray-100"
                        href={it.href}
                      >
                        {it.title}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
              <div
                className={`mt-2 hidden w-full flex-col gap-4 px-4 sm:mt-0 sm:flex sm:flex-row`}
              >
                {navList.map((it, idx) => (
                  <MenuItem key={idx}>
                    <Link href={it.href}>{it.title}</Link>
                  </MenuItem>
                ))}
              </div>
            </div>
          </div>
        )}
      </Menu>
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
