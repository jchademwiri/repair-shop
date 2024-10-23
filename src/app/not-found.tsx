import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <Image
          className="m-0"
          src="/images/not-found.png"
          width={300}
          height={300}
          sizes="300px"
          alt="page not found"
          priority={true}
          title="Page Not Found"
        />
        <Button asChild variant={"link"}>
          <Link href="/home">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
{
  /* <p>Could not find requested resource</p>
   */
}
