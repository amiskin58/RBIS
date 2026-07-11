import { useState } from "react";
import { addBall , addStrike } from "../engine/PitchEngine";
import TopScoreBoard from "./TopScoreBoard";
import BaseballField from "./BaseballField/BaseballField";
import SidePanel from "./SidePanel";
import ActionPanel from "./ActionPanel";
import { addSingle } from "../engine/HitEngine";
import {initialUIState  } from "../state/UIState";

import {
  initialGameState,
  type GameState,
} from "../state/GameState";

function GameLayout() {
  // ==========================
  // Game State
  // ==========================

  const [game, setGame] =
    useState<GameState>(initialGameState);
  const [ui, setUI] =
    useState(initialUIState);

  // ==========================
  // Event
  // ==========================

  const handleBall = () => {
    setGame((prev) => addBall(prev));
  };
  const handleStrike = () => {
    setGame((prev) => addStrike(prev));
  };
 const handleSingle = () => {
    setUI({
      selectingHitLocation: true,
      hitType: "1B",
    });
  };
  const handleFieldClick = (
    x: number,
    y: number
  ) => {
    console.log("Hit Location:", x, y);

    if (ui.hitType === "1B") {
      setGame((prev) => addSingle(prev));
    }

    setUI(initialUIState);
  };


  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "80px 1fr 180px",
        height: "100vh",
        gap: "10px",
        padding: "10px",
        background: "#f2f4f7",
      }}
    >
      {/* 上方計分板 */}
      <TopScoreBoard
        inning={game.inning}
        isTop={game.isTop}
        homeScore={game.homeScore}
        awayScore={game.awayScore}
      />

      {/* 中間 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 280px",
            gap: "10px",
            minHeight: 0,
            overflow: "hidden",
            alignItems: "stretch",
          }}
        >
        <div
          style={{
            width: "100%",
            height: "100%",
            minWidth: 0,
            minHeight: 0,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BaseballField
            bases={game.bases}
            selectingHitLocation={ui.selectingHitLocation}
            onFieldClick={handleFieldClick}
          />
      </div>

        <SidePanel
          balls={game.balls}
          strikes={game.strikes}
          outs={game.outs}
          inning={game.inning}
          isTop={game.isTop}
          pitchCount={
            game.isTop
              ? game.homePitchCount
              : game.awayPitchCount
          }
          history={game.history}
        />
      </div>

      {/* 下方操作區 */}
      <ActionPanel 
        onBall={handleBall}
        onStrike={handleStrike}
        onSingle={handleSingle}
       />
    </div>
  );
}

export default GameLayout;