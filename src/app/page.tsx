import Link from "next/link";
import { db } from "~/server/db";
const mockUrls = [
  "https://utfs.io/f/18e6d4fd-12b1-44fa-8b43-4cafa6ce1b2f-8sa96t.avif",
  "https://utfs.io/f/ac843b57-bdf1-461f-aae1-8a976ade0f96-c1xv2i.jpg",
  "https://utfs.io/f/11476007-108f-436d-9d16-0b06773cdbec-q57gk0.jpg",
  "https://utfs.io/f/64d40a50-710d-4dcf-a2cd-1e7800af653a-tixmcn.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
