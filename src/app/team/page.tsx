"use client";

import { useState } from "react";
import { members } from "./(info)/members";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const [filter, setFilter] = useState("all");

  return (
    <main>
      <section className="flex flex-col items-center justify-center mt-16 max-w-xl text-center mx-auto">
        <h1 className="text-4xl font-semibold">Our Team</h1>
        <p className="mt-4 leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, quia, doloremque quidem, aperiam iusto quibusdam
          exercitationem quos aspernatur quod.
        </p>
      </section>
      <section className="mt-12 mx-auto flex flex-col justify-center items-center">
        <div className="bg-gray-100 flex gap-1 border rounded-full p-1">
          {teamFilters.map((types, idx) => (
            <button
              key={idx}
              className={`${
                filter === types ? "bg-white" : "text-gray-500"
              } px-4 py-2 capitalize rounded-full transition`}
              onClick={() => setFilter(types)}
            >
              {types}
            </button>
          ))}
        </div>
        <div className="sm:max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 mt-6">
          {members
            .sort((a, b) => Number(a.id) - Number(b.id))
            .map((member, idx) => (
              <Link
                href={`/team/${member.id}`}
                key={idx}
                className={`${
                  filter == "all" || filter == "members" ? "flex" : "hidden"
                } cursor-pointer transition ease-in-out hover:scale-105 bg-white rounded-lg overflow-hidden drop-shadow-xl flex-col items-center mt-8`}
              >
                <Image
                  src={`/team/members/${member.id}.jpeg`}
                  alt={member.nickname}
                  width={300}
                  height={400}
                  placeholder="blur"
                />
                <div className="px-4 py-6 gap-y-2 text-center h-full flex flex-col items-center justify-center">
                  <div>
                    <h2 className="text-xl font-semibold">{member.nickname}</h2>
                    <h3 className="text-lg break-words">{member.fullname}</h3>
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
