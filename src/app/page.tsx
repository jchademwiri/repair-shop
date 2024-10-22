import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh ">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-foreground/90 text-background w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl" >
            Jack&apos;s Computer <br /> Repair shop
          </h1>
          <address>
            555 Gateway Lane <br /> Kansas City, KS 5555{" "}
          </address>
          <p>Open Daily: 0900 to 1700</p>

          <Link href="tel:000000000" className="hover:underline">
            000000000
          </Link>
        </div>
      </main>
    </div>
  );
}
