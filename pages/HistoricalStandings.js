import React from "react";
import { defunct_franchises } from "../public/data/defunct-franchises";
import { historical_standings } from "../public/data/historical-standings";

const historicalStandings = () => {
  return (
    <>
      <div>
        {historical_standings.map((stats) => {
          return (
              <div
                className="border-black border-2 w-11/12 md:w-1/2 text-center mx-auto my-2"
                key={stats.id}
              >
                <p className="text-xl text-yellow-600 font-extrabold my-3">
                  {stats.name}
                </p>
                <p>Regular Season Wins: {stats.total_wins}</p>
                <p>Regular Season Losses: {stats.total_losses}</p>
                <p>Regular Season %: {stats.reg_season_percent}</p>
                <p>Playoff Wins: {stats.playoff_wins}</p>
                <p>Playoff Losses: {stats.playoff_losses}</p>
                <p>Playoff %: {stats.playoff_percent}</p>
                <p>Overall Wins: {stats.overall_wins}</p>
                <p>Overall Losses: {stats.overall_losses}</p>
                <p>Overall %: {stats.overall_percent}</p>
                <p>Best Finish: {stats.best_finish}</p>
                <p>Worst Finish: {stats.worst_finish}</p>
                <p>League Championships: {stats.league_championships}</p>
                <p>
                  Division Championships (Defunct):{" "}
                  {stats.division_championships}
                </p>
                <p>Top 6 Playoff Appearance: {stats.top_six_playoff}</p>
              </div>
          );
        })}
      </div>

      <div>
        <h1 className="text-2xl font-extrabold text-center mt-20">
          Defunct Franchises
        </h1>
        {defunct_franchises.map((defunct) => {
          return (
              <div
                className="border-white border-2 w-11/12 md:w-1/2 text-center mx-auto my-2"
                key={defunct.id}
              >
                <p className="text-xl text-yellow-600 font-extrabold my-3">
                  {defunct.name}
                </p>
                <p>Regular Season Wins: {defunct.total_wins}</p>
                <p>Regular Season Losses: {defunct.total_losses}</p>
                <p>Regular Season %: {defunct.reg_season_percent}</p>
                <p>Playoff Wins: {defunct.playoff_wins}</p>
                <p>Playoff Losses: {defunct.playoff_losses}</p>
                <p>Playoff %: {defunct.playoff_percent}</p>
                <p>Overall Wins: {defunct.overall_wins}</p>
                <p>Overall Losses: {defunct.overall_losses}</p>
                <p>Overall %: {defunct.overall_percent}</p>
                <p>Best Finish: {defunct.best_finish}</p>
                <p>Worst Finish: {defunct.worst_finish}</p>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default historicalStandings;
