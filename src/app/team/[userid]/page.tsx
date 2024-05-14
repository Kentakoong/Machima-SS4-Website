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
    <main className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-xl w-full relative justify-start h-full md:max-h-[30rem] flex flex-col md:flex-row items-center gap-6 md:bg-white p-4 rounded-3xl overflow-hidden md:drop-shadow-2xl">
        <MachimaLogo className="size-[30rem] -z-10 absolute -right-52 md:-right-44 md:-bottom-52 -bottom-64 opacity-30" />
        <div className="flex justify-start w-full md:w-auto">
          <img
            className="rounded-2xl max-h-96 md:max-h-full object-contain"
            src={`/team/members/${member?.id}.jpeg`}
            alt={member?.nickname ?? ""}
          />
        </div>
        <div className="flex flex-col px-2 w-full">
          <h2 className="text-2xl md:text-4xl text-gray-600">
            {member?.nickname}
          </h2>
          <h1 className="text-3xl md:text-5xl font-semibold">
            {member?.fullname}
          </h1>
          <p className="text-lg md:text-2xl font-light mt-4">{member?.quote}</p>
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
