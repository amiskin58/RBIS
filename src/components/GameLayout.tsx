import { useState } from "react";
import { addBall , addStrike } from "../engine/PitchEngine";
import TopScoreBoard from "./TopScoreBoard";
import BaseballField from "./BaseballField";
import SidePanel from "./SidePanel";
import ActionPanel from "./ActionPanel";


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

  // ==========================
  // Event
  // ==========================

  const handleBall = () => {
    setGame((prev) => addBall(prev));
  };
  const handleStrike = () => {
    setGame((prev) => addStrike(prev));
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
      <TopScoreBoard />

      {/* 中間 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: "10px",
        }}
      >
        <BaseballField />

        <SidePanel
          balls={game.balls}
          strikes={game.strikes}
          outs={game.outs}
          pitchCount={game.pitchCount}
          history={game.history}
        />
      </div>

      {/* 下方操作區 */}
      <ActionPanel 
        onBall={handleBall}
        onStrike={handleStrike}
       />
    </div>
  );
}

export default GameLayout;