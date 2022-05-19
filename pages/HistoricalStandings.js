import React from "react";
import { historical_standings } from "../public/data/historical-standings";

const historicalStandings = () => {
  return (
    <div>
      {historical_standings.map((stats) => {
        return (
          <>
            <div className='border-black border-2 w-1/2 text-center mx-auto my-2'>
              <p className='text-xl text-yellow-600 font-extrabold my-3'>{stats.name}</p>
              <p>Regular Season Wins: {stats.total_wins}</p>
              <p>Regular Season Losses: {stats.total_losses}</p>
              <p>Regular Season %: {stats.reg_season_percent}</p>
              <p>Playodd Wins: {stats.playoff_wins}</p>
              <p>Playoff Losses: {stats.playoff_losses}</p>
              <p>Playoff %: {stats.playoff_percent}</p>
              <p>Overall Wins: {stats.overall_wins}</p>
              <p>Overall Losses: {stats.overall_losses}</p>
              <p>Overall %: {stats.overall_percent}</p>
              <p>Best Finish: {stats.best_finish}</p>
              <p>Worst Finish: {stats.worst_finish}</p>
              <p>League Championships: {stats.league_championships}</p>
              <p>Division Championships (Defunct): {stats.division_championships}</p>
              <p>Top 6 Playoff Appearance: {stats.top_six_playoff}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default historicalStandings;
