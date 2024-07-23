import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
export async function getImages() {
  const images = await db.query.images.findMany();
  return images;
}
export async function getImage(id: number) {
  const user = auth();
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image) throw new Error("Image not found");
  if (image.userId !== user.userId) throw new Error("Unauthorized");
  return image;
}
