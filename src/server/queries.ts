import "server-only";
import { db } from "./db";

export async function getmyImages() {
  const images = await db.query.images.findMany();
  return images;
}
