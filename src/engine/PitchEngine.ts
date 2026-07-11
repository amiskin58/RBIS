import type { GameState } from "../state/GameState";
import { PlayType, createPlayEvent } from "../models/PlayEvent";

export function addBall(game: GameState): GameState {
  // 第四壞球
  if (game.balls >= 3) {
    return {
      ...game,

      // 下一位打者
      balls: 0,
      strikes: 0,

      // 投球數+1
      pitchCount: game.pitchCount + 1,

      // Last Play
      history: [
        createPlayEvent(
          PlayType.BB,
          "BB",
          game
        ),
        ...game.history,
      ].slice(0, 20),
    };
  }

  // 一般壞球
  return {
    ...game,

    balls: game.balls + 1,

    pitchCount: game.pitchCount + 1,

    history: [
      createPlayEvent(
        PlayType.BALL,
        "Ball",
        game
      ),
      ...game.history,
    ].slice(0, 20),
  };
}