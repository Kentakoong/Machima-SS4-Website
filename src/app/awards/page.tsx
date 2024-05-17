"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { awards } from "./(info)/awards";

export default function Awards() {
  return (
    <main className="relative pt-20">
      <section className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Awards</h1>
        <p className="mt-4 text-xl leading-5">
          &quot;ฮาดี มีรางวัล🏆🏆🏆&quot;
        </p>
      </section>
      <section className="mx-auto mt-10 flex flex-col items-center justify-center px-6 text-center">
        <Swiper
          className="w-full px-6"
          spaceBetween={50}
          breakpoints={{
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.25": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {awards.map((award) => (
            <SwiperSlide key={award.id}>
              <Link
                href={`/awards/articles/${award.id}`}
                className="flex aspect-[3/2] flex-col items-center justify-center transition ease-in-out hover:scale-[99%]"
              >
                <Image
                  src={`/awards/${award.id}/thumb.jpg`}
                  alt="award"
                  width={600}
                  height={400}
                  className="absolute aspect-[3/2] w-full rounded-xl"
                  priority
                />
                <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center rounded-xl bg-black/50 text-white opacity-0 transition ease-in-out hover:opacity-100">
                  <h2 className="text-3xl font-bold">{award.title}</h2>
                  <div className="flex flex-row items-center justify-center">
                    {award.award.map((a, idx) => (
                      <span key={a} className="text-xl">
                        {a} place
                        {idx < award.award.length - 1 ? <>,&nbsp;</> : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
