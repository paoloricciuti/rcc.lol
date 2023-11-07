import { kv } from "@vercel/kv";

export const GET = async ({ params: { link } }) => {
  let url = "https://ricciuti.me";
  try {
    url = (await import(`./links/${link.toLowerCase()}.link`)).default;
  } catch (e) {}
  console.log("Redirecting to ", url);
  kv.incr(url);
  return new Response(null, {
    status: 301,
    headers: {
      Location: url,
    },
  });
};
