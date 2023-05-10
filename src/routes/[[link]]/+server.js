export function entries(){
   const links_entries=import.meta.glob("./links/*");
   return Object.keys(links_entries).map(link => ({
      link: link.split("/").at(-1),
   }))
}

export const prerender = true;

export const GET = async ({ params: { link } }) => {
  let url = "https://ricciuti.me";
  try {
    url = (await import(`./links/${link}.link?raw`)).default;
  } catch (e) {}
  console.log({ url });
  return new Response(null, {
    status: 301,
    headers: {
      Location: url,
    },
  });
};
