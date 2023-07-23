import { connectToDatabase } from "../../server/db/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("FantasyPlayers")
    .find({})
    .limit(20)
    .toArray();

  res.json(data);
}
