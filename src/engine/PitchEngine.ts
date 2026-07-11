import type { GameState } from "../state/GameState";
import { PlayType, createPlayEvent } from "../models/PlayEvent";
import { walkAdvance } from "./BaseRunner";

export function addBall(game: GameState): GameState {
  // 第四壞球
  if (game.balls >= 3) {

    const result = walkAdvance(
      game.bases,
      game.batter!
    );
    return {
      ...game,
      bases: result.bases,
      ...(result.score > 0
      ? game.isTop
        ? { awayScore: game.awayScore + result.score }
        : { homeScore: game.homeScore + result.score }
      : {}),
      // 下一位打者
      balls: 0,
      strikes: 0,

      // 投球數+1
      ...(game.isTop
        ? { homePitchCount: game.homePitchCount + 1 }
        : { awayPitchCount: game.awayPitchCount + 1 }),

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

    ...(game.isTop
      ? { homePitchCount: game.homePitchCount + 1 }
      : { awayPitchCount: game.awayPitchCount + 1 }),

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
export function addStrike(game: GameState): GameState {
  // 第三好球
if (game.strikes >= 2) {
  const nextGame = {
    ...game,

    balls: 0,
    strikes: 0,
    outs: game.outs + 1,
    ...(game.isTop
      ? { homePitchCount: game.homePitchCount + 1 }
      : { awayPitchCount: game.awayPitchCount + 1 }),

    history: [
      createPlayEvent(
        PlayType.K,
        "Strike Out",
        game
      ),
      ...game.history,
    ].slice(0, 20),
  };

  if (nextGame.outs >= 3) {
    return changeSide(nextGame);
  }

  return nextGame;
}

  // 一般好球
  return {
    ...game,

    strikes: game.strikes + 1,
    ...(game.isTop
      ? { homePitchCount: game.homePitchCount + 1 }
      : { awayPitchCount: game.awayPitchCount + 1 }),

    history: [
      createPlayEvent(
        PlayType.CALLED_STRIKE,
        "Called Strike",
        game
      ),
      ...game.history,
    ].slice(0, 20),
  };
}
//負責換局的函式
function changeSide(game: GameState): GameState {
  return {
    ...game,

    balls: 0,
    strikes: 0,
    outs: 0,

    isTop: !game.isTop,

    inning: game.isTop
      ? game.inning
      : game.inning + 1,

    bases: {
      first: null,
      second: null,
      third: null,
    },
  };
}