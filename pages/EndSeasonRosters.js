import React from "react";
import { end_season_roster } from "../public/data/end-season-rosters";

const EndSeasonRosters = () => {
  return (
    <div className="px-10">
      <h1 className="text-6xl text-center text-yellow-600 my-10">
        2022 End of Season Rosters
      </h1>
      <div>
        {end_season_roster.map((roster) => {
          return (
            <div
              className="border-yellow-600 border-4 bg-black text-white w-11/12 md:w-1/4 mx-auto my-2 pb-2"
              key={roster.id}
            >
              <div className="">
                <h1 className="text-xl text-yellow-600 font-extrabold text-center my-3">
                  {roster.name}
                </h1>
                <div className="px-2">
                  <p className="border-b-2 border-yellow-600 my-2">
                    QB: {roster.qb}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    WR: {roster.wr1}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    WR: {roster.wr2}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    RB: {roster.rb1}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    RB: {roster.rb2}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    TE: {roster.te}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    FLEX: {roster.flex1}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    FLEX: {roster.flex2}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    K: {roster.kicker}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    DEF: {roster.def}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    BN: {roster.bn1}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    BN: {roster.bn2}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    BN: {roster.bn3}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    BN: {roster.bn4}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    BN: {roster.bn5}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    BN: {roster.bn6}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    IR: {roster.bn7}
                  </p>
                  <p className="border-b-2 border-yellow-600 my-2">
                    IR: {roster.bn8}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EndSeasonRosters;
