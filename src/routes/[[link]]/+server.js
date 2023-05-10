export const GET = async ({ params: { link } }) => {
  let url = "https://ricciuti.me";
  try {
    url = (await import(`./links/${link}.link`)).default;
  } catch (e) {}
  console.log("Redirecting to ", url);
  return new Response(null, {
    status: 301,
    headers: {
      Location: url,
    },
  });
};
