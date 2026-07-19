import type { LiveGameState } from "../types/LiveGameState";
import type { HitLocation } from "../types/HitLocation";

export function selectHitLocation(
  game: LiveGameState,
  location: HitLocation
): LiveGameState {
  return {
    ...game,
    hitLocation: location,
  };
}