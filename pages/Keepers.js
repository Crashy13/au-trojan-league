import React from "react";
import { keeper_picks } from "../public/data/keepers";

const keepers = () => {
  return (
    <div>
      <h1 className='text-4xl mb-5 text-red-600'>UNDER CONSTRUCTION</h1>
      <>
        {keeper_picks.map((keeper) => {
          return (
            <>
              <p>{keeper.name}</p>
              <p>{keeper.players_kept}</p>
              <p>{keeper.xfl_players}</p>
            </>
          );
        })}
      </>
    </div>
  );
};

export default keepers;
