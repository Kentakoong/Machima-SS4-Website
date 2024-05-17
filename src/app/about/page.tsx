import { InstagramLogo } from "@machima/components/Logo/Instagram";
import { MachimaLogo } from "@machima/components/Machima/Logo";
import Link from "next/link";

export default function About() {
  return (
    <main className="h-full px-4 pt-20">
      <section className="mx-auto mt-16 flex flex-col items-center justify-center text-center">
        <MachimaLogo className="h-fit w-full max-w-72" />
        <h1 className="mt-10 text-5xl font-extrabold tracking-widest text-orange-machima">
          MACHIMA
        </h1>
        <div className="mt-10">
          <p>
            <span className="text-xl font-semibold text-orange-machima md:text-2xl md:font-medium">
              บ้าน Machima <br className="md:hidden" />
            </span>{" "}
            <span className="text-lg md:text-2xl">
              ชิลไม่เคยแพ้ นอนไม่เคยพอ กวาดชัยด้วยความชิล
            </span>
          </p>
          <p>
            <span className="text-xl font-semibold text-orange-machima md:text-2xl md:font-medium">
              บ้าน Machima <br className="md:hidden" />
            </span>{" "}
            <span className="text-lg md:text-2xl">
              นอนเต็มอิ่ม ฝันยาว ๆ แต่ยังชนะได้ทุกคราว
            </span>
          </p>
          <p>
            <span className="text-xl font-semibold text-orange-machima md:text-2xl md:font-medium">
              บ้าน Machima <br className="md:hidden" />
            </span>{" "}
            <span className="text-lg md:text-2xl">
              ไม่ต้องรีบ เรานอนหลับยังชนะ
            </span>
          </p>
        </div>
        <Link href="https://instagram.com/machima.a">
          <InstagramLogo
            width={50}
            height={50}
            className="mt-10 cursor-pointer"
          />
        </Link>
      </section>
    </main>
  );
}
