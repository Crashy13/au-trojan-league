import React from "react";
import { keeper_picks } from "../public/data/keepers";

const keepers = () => {
  return (
    <div className="md:text-center my-10">
      {keeper_picks.map((keeper) => {
        return (
          <div
            className="border-4 border-yellow-600 bg-black text-white pb-4 w-11/12 mx-auto my-2 px-2"
            key={keeper.id}
          >
            <h1 className="text-2xl font-bold my-4 text-yellow-600">
              {keeper.name}
            </h1>
            <h2 className="text-xl">2022 Keepers</h2>
            <p>{keeper.players_kept}</p>
            <h2 className="text-xl mt-2">XFL Players</h2>
            <p>{keeper.xfl_players}</p>
          </div>
        );
      })}
    </div>
  );
};

export default keepers;
