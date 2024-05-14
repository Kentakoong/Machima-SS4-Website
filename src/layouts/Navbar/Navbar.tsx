"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MachimaLogo } from "@machima/components/Machima/Logo";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 md:px-8 py-2">
      <Menu>
        {({ open }) => (
          <div className="flex flex-col sm:flex-row justify-between bg-white border drop-shadow-xl rounded-3xl sm:rounded-full px-4 py-2 w-full *:flex *:items-center">
            <div className="flex justify-between sm:justify-start gap-2">
              <Link href="/">
                <MachimaLogo className="size-12 hover:scale-105 transition ease-in-out hover:drop-shadow-sm bg-white rounded-full" />
              </Link>
              <MenuButton
                className={`${open ? "rotate-90" : ""} sm:hidden transition`}
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
              <MenuItems className="flex sm:hidden justify-center w-full text-center">
                <div
                  className={`${
                    !open ? "hidden sm:flex" : "flex"
                  } flex-col sm:flex-row sm:mt-0 w-full mt-2`}
                >
                  {navList.map((it, idx) => (
                    <MenuItem key={idx}>
                      <Link
                        className="hover:bg-gray-100 w-full rounded-lg transition py-2"
                        href={it.href}
                      >
                        {it.title}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
              <div
                className={`hidden px-4 gap-4 sm:flex flex-col sm:flex-row sm:mt-0 w-full mt-2`}
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
