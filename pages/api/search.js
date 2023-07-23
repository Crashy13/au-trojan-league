import { connectToDatabase } from "../../server/db/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("FantasyPlayers")
    .aggregate([
      {
        $search: {
          search: {
            query: req.query.term,
            path: ["firstName", "lastName"],
          },
        },
      },
      {
        $project: {
          firstName: 1,
          lastName: 1,
        },
      },
      {
        $limit: 20,
      },
    ])
    .toArray();

  res.json(data);
}
