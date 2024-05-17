"use client";

import Image from "next/image";
import { awards } from "../(info)/awards";
import { usePathname } from "next/navigation";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const award = awards.find((award) => award.id === pathName.split("/")[3]);
  return (
    <main className="mx-auto max-w-3xl pt-28">
      <Image
        src={`/awards/${award?.id}/thumb.jpg`}
        alt="award"
        width={1200}
        height={800}
        className="w-full rounded-2xl"
        priority
      />
      <div className="mt-4">
        <h2 className="text-xl">
          {award?.award.map((reward) => `${reward} place`).join(", ")}
        </h2>
        <h1 className="mt-1 text-3xl font-bold">{award?.title}</h1>
      </div>
      <div className="mt-8">{children}</div>
    </main>
  );
}
