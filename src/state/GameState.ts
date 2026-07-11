import type { PlayEvent } from "../models/PlayEvent";
//import type { Team } from "../models/Team";

export interface Player {
  id: number;
  number: number;
  name: string;
}

export interface Bases {
  first: Player | null;
  second: Player | null;
  third: Player | null;
}

export interface GameState {
  // BSO
  balls: number;
  strikes: number;
  outs: number;

  // 比賽
  inning: number;
  isTop: boolean;

  // 投球數
  homePitchCount: number;
  awayPitchCount: number;

  // 比分（舊）
  homeScore: number;
  awayScore: number;



  // 球員
  batter: Player | null;
  pitcher: Player | null;

  // 壘包
  bases: Bases;

  // Last Play
 history: PlayEvent[];
}

export const initialGameState: GameState = {
  balls: 0,
  strikes: 0,
  outs: 0,

  inning: 1,
  isTop: true,

  homePitchCount: 0,
  awayPitchCount: 0,
  homeScore: 0,
  awayScore: 0,

  batter: {
    id: 23,
    number: 23,
    name: "王小明",
  },
// 先保留（之後再移除）
  pitcher: {
    id: 18,
    number: 18,
    name: "林志強",
  },

  bases: {
    first: null,
    second: null,
    third: null,
  },

  history: [],
};