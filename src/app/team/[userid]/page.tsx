/* eslint-disable @next/next/no-img-element */
"use client";

import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { GitHubLogo } from "@machima/components/Logo/GitHub";
import { LinkedInLogo } from "@machima/components/Logo/LinkedIn";
import { MachimaLogo } from "@machima/components/Machima/Logo";
import Link from "next/link";
import { members } from "../(info)/members";

export default function MemberPage({ params }: { params: { userid: string } }) {
  const member = members.find((member) => member.id === params.userid);

  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-full w-full max-w-screen-xl flex-col items-center justify-start gap-6 overflow-hidden rounded-3xl p-4 md:max-h-[30rem] md:flex-row md:bg-white md:drop-shadow-2xl">
        <MachimaLogo className="absolute -bottom-64 -right-52 -z-10 size-[30rem] opacity-30 md:-bottom-52 md:-right-44" />
        <div className="flex w-full justify-start md:w-auto">
          <img
            className="max-h-96 rounded-2xl object-contain md:max-h-full"
            src={`/team/members/${member?.id}.jpeg`}
            alt={member?.nickname ?? ""}
          />
        </div>
        <div className="flex w-full flex-col px-2">
          <h2 className="text-2xl text-gray-600 md:text-4xl">
            {member?.nickname}
          </h2>
          <h1 className="text-3xl font-semibold md:text-5xl">
            {member?.fullname}
          </h1>
          <p className="mt-4 text-lg font-light md:text-2xl">{member?.quote}</p>
          <div className="mt-4 flex gap-x-2">
            {member?.github && (
              <Link href={member.github}>
                <GitHubLogo width={32} height={32} />
              </Link>
            )}
            {member?.linkedin && (
              <Link href={member.linkedin}>
                <LinkedInLogo width={32} height={32} />
              </Link>
            )}
            {member?.cv && (
              <Link href={member.cv}>
                <DocumentTextIcon className="size-8" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
