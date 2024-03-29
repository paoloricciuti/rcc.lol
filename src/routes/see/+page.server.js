import { kv } from "@vercel/kv";

export async function load() {
  const links_keys = Object.keys(import.meta.glob("../**/*"));
  const links = [];
  for (let folder of links_keys) {
    const matches = folder.match(
      /\.\.\/\[\[link\]\]\/links\/(?<link>.+)\.link/
    );
    if (matches?.groups) {
      links.push(matches.groups.link);
    }
  }
  const counts = await kv.mget(links);
  return {
    links,
    counts,
  };
}
