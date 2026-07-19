import type { LiveGameState } from "../types/LiveGameState";
import type { HitType } from "../types/HitType";

export function selectHitType(
  game: LiveGameState,
  hitType: HitType
): LiveGameState {
  return {
    ...game,
    hitType,
  };
}