import Image from "next/image";

export default function Moments() {
  return (
    <main className="pt-20">
      <section className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold">Moments</h1>
        <p className="mt-4 leading-5">Moments. At Machima House</p>
      </section>
      <section className="mx-auto mt-12 grid w-full max-w-5xl justify-center gap-6 px-4 sm:grid-cols-3 md:px-0 lg:grid-cols-4">
        {[...Array(60)].map((_, idx) => (
          <div className="relative h-96 w-full sm:max-w-64" key={idx}>
            <Image
              key={idx}
              src={`/moments/${idx + 1}.jpeg`}
              alt={`Moment ${idx + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full select-none rounded-lg object-cover transition ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
