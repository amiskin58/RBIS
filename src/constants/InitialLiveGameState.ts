import type { LiveGameState } from "../types/LiveGameState";

export const INITIAL_LIVE_GAME_STATE: LiveGameState = {
  inning: 1,
  isTop: true,
  balls: 0,
  strikes: 0,
  outs: 0,
  awayScore: 0,
  homeScore: 0,
  runnerOnFirst: false,
  runnerOnSecond: false,
  runnerOnThird: false,
};