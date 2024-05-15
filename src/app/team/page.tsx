"use client";

import { useState } from "react";
import { members } from "./(info)/members";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const [filter, setFilter] = useState("all");

  return (
    <main>
      <section className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold">Our Team</h1>
        <p className="mt-4 leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, quia, doloremque quidem, aperiam iusto quibusdam
          exercitationem quos aspernatur quod.
        </p>
      </section>
      <section className="mx-auto mt-12 flex flex-col items-center justify-center">
        <div className="flex gap-1 rounded-full border bg-gray-100 p-1">
          {teamFilters.map((types, idx) => (
            <button
              key={idx}
              className={`${
                filter === types ? "bg-white" : "text-gray-500"
              } rounded-full px-4 py-2 capitalize transition`}
              onClick={() => setFilter(types)}
            >
              {types}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-6 grid grid-cols-2 gap-6 sm:max-w-6xl sm:grid-cols-3 lg:grid-cols-4">
          {members
            .sort((a, b) => Number(a.id) - Number(b.id))
            .map((member, idx) => (
              <Link
                href={`/team/${member.id}`}
                key={idx}
                className={`${
                  filter == "all" || filter == "members" ? "flex" : "hidden"
                } mt-8 cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-white drop-shadow-xl transition ease-in-out hover:scale-105`}
              >
                <Image
                  src={`/team/members/${member.id}.jpeg`}
                  alt={member.nickname}
                  width={300}
                  height={400}
                />
                <div className="flex h-full flex-col items-center justify-center gap-y-2 px-4 py-6 text-center">
                  <div>
                    <h2 className="text-xl font-semibold">{member.nickname}</h2>
                    <h3 className="break-words text-lg">{member.fullname}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{member.quote}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

const teamFilters = ["all", "coach", "members"];
