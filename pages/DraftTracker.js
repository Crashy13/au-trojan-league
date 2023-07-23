import Head from "next/head";
import { connectToDatabase } from "../server/db/mongodb";

export default function DraftTracker({ players }) {
  console.log(players);

  const addNew = async (player) => {
    const data = await fetch(
      `http://localhost:3000/api/addNew?player_id=${player._id}&owner=Scotty`
    );
    const res = await data.json();
    console.log(res);
  };
  return (
    <div>
      <Head>
        <title>Draft Tracker</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto flex">
        <div className="flex-col inline-flex gap-2">
          <input placeholder="First Name" className="pl-2"></input>
          <input placeholder="Last Name" className="pl-2"></input>
          <input placeholder="Position" className="pl-2"></input>
          <input placeholder="NFL Team" className="pl-2"></input>
          <input placeholder="Owner" className="pl-2"></input>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap">
          {players &&
            players.map((player) => (
              <>
                <p>{player.firstName}</p>
                <p>{player.lastName}</p>
                <br />
                <p>{player.position}</p>
                <br />
                <p>{player.nflTeam}</p>
                <br />
                <p>{player.fantasyTeam}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded"
                  onClick={() => addNew(player)}
                >
                  Add Player
                </button>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("FantasyPlayers")
    .find({})
    .limit(20)
    .toArray();

  const players = JSON.parse(JSON.stringify(data));

  const filtered = players.map((player) => {
    return {
      _id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      position: player.position,
      nflTeam: player.nflTeam,
      fantasyTeam: player.fantasyTeam,
    };
  });

  return {
    props: { players: players },
  };
}
