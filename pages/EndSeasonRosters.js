import React from "react";
import { end_season_roster_1, end_season_roster_2 } from "../public/data/end-season-rosters";

const EndSeasonRosters = () => {
  return (
    <div className='px-10'>
        <h1 className="text-6xl text-center text-yellow-600 my-10">2021 End of Season Rosters</h1>
      <div className="lg:flex w-full gap-40 xl:gap-60">
        {end_season_roster_1.map((roster) => {
          return (
            <>
              <div>
                <h1 className="text-2xl my-2 text-white">{roster.name}</h1>
                <p>1: {roster.one}</p>
                <p>2: {roster.two}</p>
                <p>3: {roster.three}</p>
                <p>4: {roster.four}</p>
                <p>5: {roster.five}</p>
                <p>6: {roster.six}</p>
                <p>7: {roster.seven}</p>
                <p>8: {roster.eight}</p>
                <p>9: {roster.nine}</p>
                <p>10: {roster.ten}</p>
                <p>11: {roster.eleven}</p>
                <p>12: {roster.twelve}</p>
                <p>13: {roster.thirteen}</p>
                <p>14: {roster.fourteen}</p>
                <p>15: {roster.fifteen}</p>
                <p>16: {roster.sixteen}</p>
                <p>17: {roster.seventeen}</p>
                <p>18: {roster.eighteen}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="lg:flex w-full gap-40 xl:gap-60">
        {end_season_roster_2.map((roster) => {
          return (
            <>
              <div>
                <h1 className="text-2xl mt-10 mb-2 text-white">{roster.name}</h1>
                <p>1: {roster.one}</p>
                <p>2: {roster.two}</p>
                <p>3: {roster.three}</p>
                <p>4: {roster.four}</p>
                <p>5: {roster.five}</p>
                <p>6: {roster.six}</p>
                <p>7: {roster.seven}</p>
                <p>8: {roster.eight}</p>
                <p>9: {roster.nine}</p>
                <p>10: {roster.ten}</p>
                <p>11: {roster.eleven}</p>
                <p>12: {roster.twelve}</p>
                <p>13: {roster.thirteen}</p>
                <p>14: {roster.fourteen}</p>
                <p>15: {roster.fifteen}</p>
                <p>16: {roster.sixteen}</p>
                <p>17: {roster.seventeen}</p>
                <p>18: {roster.eighteen}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default EndSeasonRosters;
