export const PlayType = {
  PLAY_BALL: "PLAY_BALL",

  BALL: "BALL",
  CALLED_STRIKE: "CALLED_STRIKE",
  SWING_STRIKE: "SWING_STRIKE",
  FOUL: "FOUL",

  BB: "BB",
  HBP: "HBP",
  K: "K",

  HIT: "HIT",
  OUT: "OUT",
  ERROR: "ERROR",

  SB: "SB",
  CS: "CS",

  WP: "WP",
  PB: "PB",

  PICKOFF: "PICKOFF",

  RUN: "RUN",
} as const;

export type PlayType =
  (typeof PlayType)[keyof typeof PlayType];

export interface PlayEvent {
  id: number;

  pitch: number;

  inning: number;

  isTop: boolean;

  type: PlayType;

  text: string;

  time: Date;
}
 export function createPlayEvent(
  type: PlayType,
  text: string,
  game: {
    homePitchCount: number;
    awayPitchCount: number;
    inning: number;
    isTop: boolean;
  }
): PlayEvent {
  return {
    id: Date.now(),

    pitch:
      (game.isTop
        ? game.homePitchCount
        : game.awayPitchCount) + 1,

    inning: game.inning,

    isTop: game.isTop,

    type,

    text,

    time: new Date(),
  };
}