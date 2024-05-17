"use client";

import { QuotesCloud } from "@machima/components/QuotesCloud";
import { members } from "../team/(info)/members";

const quotes = members
  .filter((member) => member.quote)
  .map((member, idx) => ({ idx: idx, quote: member.quote }));

export default function Home() {
  return (
    <main className="relative mt-20 h-full w-full">
      <QuotesCloud quotes={quotes} />
      <section className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center font-montserrat">
        <h2 className="text-4xl font-semibold sm:text-7xl">WE ARE</h2>
        <h1 className="mt-4 text-5xl font-extrabold tracking-widest text-orange-machima sm:text-8xl">
          MACHIMA
        </h1>
      </section>
    </main>
  );
}
