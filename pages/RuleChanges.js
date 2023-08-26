import React from "react";

const RuleChanges = () => {
  return (
    <div className="p-10">
      <div>
        <h1 className="text-6xl mb-6 font-bold text-yellow-600">
          Keeper League Rules
        </h1>
        <p>
          1) Keeping a player picked up in the waivers that was drafted: Owner
          loses round 10 (rounds 1-10) or round 16 (rounds 11-16)
        </p>
        <p>
          2) If you own multiple picks in the same round, your keeper is the
          LAST pick in that round
        </p>
        <p>3) No time limit on keepers being kept (1st round - 2 year limit)</p>
        <p>
          4) Players are tradeable in the offseason, but you are not required to
          keep the player you trade for
        </p>
        <p>
          5) Owner can do whatever he wants when you trade for a player in the
          off-season
        </p>
        <p>
          6) NEVER TRADE WITH FUNDERBURK (This is more of advice than a hard
          rule)
        </p>
      </div>

      <div>
        <h1 className="text-6xl mb-6 font-bold text-yellow-600">
          Rule Changes for 2023
        </h1>
        <p>1) TE Slot is now WR/TE Slot</p>
        <p>2) Full PPR</p>
        <p>3) Bonus Points:</p>
        <div className="ml-5">
          <p> - 5 points for 300+ passing yards</p>
          <p> - 2 points for 250 - 299 passing yards</p>
          <p> - 5 points for 150+ rushing yards</p>
          <p> - 2 points for 100 - 149 rushing yards</p>
          <p> - 5 points for 150+ receiving yards</p>
          <p> - 2 points for 100 - 149 receiving yards</p>
        </div>
      </div>

      <div>
        <h1 className="text-6xl my-6 font-bold text-yellow-600">
          Rule Changes for 2022
        </h1>
        <p>1) Vetos Rule 3 from 2021</p>
        <p>2) Unlimited weekly waivers</p>
        <p>3) No time limit on keepers being kept (1st round - 2 year limit)</p>
        <p>
          4) Playoff games played for prime draft picks (7th place - 1st pick,
          8th place - 2nd pick, etc.)
        </p>
        <p>5) No negative points for kickers</p>
        <p>
          6) Player is available 1 day when a player is dropped after waivers
        </p>
        <p>
          7) Keeping a player with multiple picks in the same round loses LAST
          pick
        </p>
        <p>
          8) Owner can do whatever they want when you trade for a player in the
          off-season
        </p>
      </div>

      <div>
        <h1 className="text-6xl mb-6 font-bold text-yellow-600">
          Rule Changes for 2021
        </h1>
        <p>
          1) Winner/loser picks prize and punishment for 2021 as long as
          everyone agrees
        </p>
        <p>2) Keep 2 IR due to COVID</p>
        <p className="line-through">
          3) Limit roster positions - Max of 6 for RB/WR
        </p>
        <p>4) Trade deadline: Week 13 due to increase to 17 games in 2021</p>
        <p>
          5) Keeping a player picked up in the waivers that was drafted: Owner
          loses round 10 (1-10) or loses round 16 (11-16)
        </p>
        <p>
          6) If you own two picks in the same round, your keeper is the first
          pick in that round
        </p>
        <p>
          7) Players are tradeable in the offseason, but you are not required to
          keep the player you trade for
        </p>
      </div>
    </div>
  );
};

export default RuleChanges;
