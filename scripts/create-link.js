import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [, , link_param, link, slug_param, slug] = process.argv;

if (link_param !== "--link" || slug_param !== "--slug") {
  process.exit(1);
}

const path = resolve("./src/routes/[[link]]/links", `${slug}.link`);

writeFileSync(path, link);

console.log(`Wrote ${link} to file: ${path}`);
