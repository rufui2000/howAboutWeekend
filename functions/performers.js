export async function onRequest(context) {
  const { weekends } = context.env;
  const id = context.params.id;

  const query = "SELECT name, sns, youtube FROM people WHERE id = ?";
  const { results } = await weekends.prepare(query).bind(id).all();

  if (results.length === 0) {
    return new Response("出演者が見つかりません", { status: 404 });
  }

  return Response.json(results[0]);
}

