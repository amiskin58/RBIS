import type { LiveGameState } from "../types/LiveGameState";
import type { HitResult } from "../types/HitResult";

export function selectHitResult(
  game: LiveGameState,
  hitResult: HitResult
): LiveGameState {
  return {
    ...game,
    hitResult,
  };
}