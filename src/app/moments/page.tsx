import Image from "next/image";

export default function Moments() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center mt-16 max-w-xl text-center mx-auto">
        <h1 className="text-4xl font-semibold">Moments</h1>
        <p className="mt-4 leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, quia, doloremque quidem, aperiam iusto quibusdam
          exercitationem quos aspernatur quod.
        </p>
      </section>
      <section className="max-w-5xl w-full grid justify-center sm:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 mt-12">
        {[...Array(60)].map((_, idx) => (
          <div className="relative w-full sm:max-w-64 h-96" key={idx}>
            <Image
              key={idx}
              src={`/moments/${idx + 1}.jpeg`}
              alt={`Moment ${idx + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover rounded-lg w-full h-full hover:scale-105 transition ease-in-out select-none"
              placeholder="blur"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
