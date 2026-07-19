import type { GameEvent } from "./GameEvent";
import type { HitLocation } from "./HitLocation";
import type { HitType } from "./HitType";
import type { DefensivePosition } from "./DefensivePosition";
import type { HitResult } from "./HitResult";

export interface LiveGameState {
  inning: number;
  isTop: boolean;

  balls: number;
  strikes: number;
  outs: number;

  runnerOnFirst: boolean;
  runnerOnSecond: boolean;
  runnerOnThird: boolean;

  awayScore: number;
  homeScore: number;

  events: GameEvent[];
  hitLocation: HitLocation | null;
  hitType: HitType | null;
  fielder: DefensivePosition | null;
  hitResult: HitResult | null;
}