import type { ImageMetadata } from "astro";

// Thumbnails are stored locally so visitors don't load anything from YouTube
// until they click through.
const thumbnails = import.meta.glob<{ default: ImageMetadata }>("../assets/youtube/*.jpg", {
  eager: true,
});

const titles: Record<string, string> = {
  eRTJPIa39a4:
    "Why make POW! — the flexible and private menstrual cycle journal // POW! Status Update // June 2020",
  Bk1jonYPFD4:
    "Celebrating POW! (usepow.app)  ·  A day in my life as a developer, founder and mom  ·  March 2021",
  TzJfepDjpzM:
    "POW! (usepow.app) Focus Friday  ·  A day in my life as a developer, founder and mom  ·  Spring 2021",
  nS36D2zUkvA:
    "A privacy first period tracker? Is it even possible? by Benedicte Raae | JSConf Budapest 2019",
};

export const getVideo = (id: string) => {
  const thumbnail = thumbnails[`../assets/youtube/${id}.jpg`]?.default;
  if (!thumbnail || !titles[id]) {
    throw new Error(`Unknown YouTube video "${id}", add its title and thumbnail to src/data/videos.ts`);
  }
  return { title: titles[id], url: `https://youtu.be/${id}`, thumbnail };
};
