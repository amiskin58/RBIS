export type GameEventType =
  | "BALL"
  | "STRIKE"
  | "FOUL"
  | "OUT"
  | "WALK"
  | "HBP"
  | "SINGLE"
  | "DOUBLE"
  | "TRIPLE"
  | "HOME_RUN"
  | "ERROR"
  | "FIELDERS_CHOICE"
  | "DOUBLE_PLAY"
  | "SAC_FLY"
  | "SAC_BUNT"
  | "WILD_PITCH"
  | "PASSED_BALL"
  | "BALK"
  | "STEAL"
  | "CAUGHT_STEALING"
  | "PICKOFF"
  | "RUNNER_INTERFERENCE"
  | "BATTER_INTERFERENCE"
  | "OBSTRUCTION"
  | "DEFENSIVE_INDIFFERENCE"
  | "CATCHER_INTERFERENCE"
  | "DROPPED_THIRD_STRIKE"
  | "INTENTIONAL_WALK"
  | "NO_PITCH"
  | "DEAD_BALL"
  | "TIMEOUT"
  | "GAME_DELAY"
  | "GAME_RESUMED"
  | "RAIN_DELAY"
  | "SUSPENDED_GAME";

export interface GameEvent {
  id: string;

  type: GameEventType;

  inning: number;

  isTop: boolean;

  balls: number;

  strikes: number;

  outs: number;

  awayScore: number;

  homeScore: number;

  runnerOnFirst: boolean;

  runnerOnSecond: boolean;

  runnerOnThird: boolean;

  createdAt: number;
} 

export function createGameEvent(
  type: GameEventType,
  inning: number,
  isTop: boolean
): GameEvent {
  return {
    id: crypto.randomUUID(),
    type,
    inning,
    isTop,
    timestamp: Date.now(),
  };
}