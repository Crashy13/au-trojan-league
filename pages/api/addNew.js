import { connectToDatabase } from "../../server/db/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = req.query;

  const response = await db.collection("FantasyTeams").insertOne(data);

  res.json(response);
}
