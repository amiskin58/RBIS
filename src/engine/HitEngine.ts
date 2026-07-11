import type { GameState } from "../state/GameState";
import { PlayType, createPlayEvent } from "../models/PlayEvent";
import { singleAdvance } from "./HitAdvance";


export function addSingle(
  game: GameState
): GameState {
  if (!game.batter) return game;

  const result = singleAdvance(
    game.bases,
    game.batter
  );

  return {
    ...game,

    balls: 0,
    strikes: 0,
    ...(game.isTop
      ? { homePitchCount: game.homePitchCount + 1 }
      : { awayPitchCount: game.awayPitchCount + 1 }),
      
    bases: result.bases,

    ...(result.score > 0
      ? game.isTop
        ? { awayScore: game.awayScore + result.score }
        : { homeScore: game.homeScore + result.score }
      : {}),

    history: [
      createPlayEvent(
        PlayType.SINGLE,
        "1B",
        game
      ),
      ...game.history,
    ].slice(0, 20),
  };
}