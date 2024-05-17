/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowLeftIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { GitHubLogo } from "@machima/components/Logo/GitHub";
import { LinkedInLogo } from "@machima/components/Logo/LinkedIn";
import { MachimaLogo } from "@machima/components/Machima/Logo";
import Link from "next/link";
import { members } from "../(info)/members";

export default function MemberPage({ params }: { params: { userid: string } }) {
  const member = members.find((member) => member.id === params.userid);

  return (
    <main className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-300 to-orange-600 px-6 pt-20">
      <div className="relative flex h-full max-h-[50rem] max-w-md flex-col items-center justify-start gap-x-12 gap-y-4 overflow-hidden rounded-3xl bg-white p-4 drop-shadow-2xl sm:max-h-[30rem] sm:max-w-screen-lg sm:flex-row">
        <MachimaLogo className="absolute -bottom-64 -right-52 -z-10 size-[30rem] opacity-30 sm:-bottom-52 sm:-right-44" />
        <div className="flex w-fit sm:max-h-full sm:justify-start">
          <img
            className="h-full max-h-96 rounded-2xl object-contain sm:max-h-full"
            src={`/team/members/${member?.id}.jpeg`}
            alt={member?.nickname ?? ""}
          />
        </div>
        <div className="flex h-full w-full flex-col py-2 sm:justify-between sm:py-8">
          <div className="flex w-full justify-start">
            <Link href="/team">
              <ArrowLeftIcon className="size-5" />
            </Link>
          </div>
          <div className="mt-5 flex w-full flex-col px-2">
            <h2 className="text-2xl text-gray-600 sm:text-3xl md:text-4xl">
              {member?.nickname}
            </h2>
            <h1 className="break-words text-3xl font-semibold sm:text-4xl md:text-5xl">
              {member?.fullname}
            </h1>
            <p className="mt-4 text-lg font-light sm:text-xl md:text-2xl">
              {member?.quote}
            </p>
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
          <div />
        </div>
      </div>
    </main>
  );
}
