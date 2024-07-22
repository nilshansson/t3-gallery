import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getmyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/18e6d4fd-12b1-44fa-8b43-4cafa6ce1b2f-8sa96t.avif",
  "https://utfs.io/f/ac843b57-bdf1-461f-aae1-8a976ade0f96-c1xv2i.jpg",
  "https://utfs.io/f/11476007-108f-436d-9d16-0b06773cdbec-q57gk0.jpg",
  "https://utfs.io/f/64d40a50-710d-4dcf-a2cd-1e7800af653a-tixmcn.jpg",
];

async function Images() {
  const images = await getmyImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>Please sign in above</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
