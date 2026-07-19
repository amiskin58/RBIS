import type { LiveGameState } from "../types/LiveGameState";
import type { DefensivePosition } from "../types/DefensivePosition";

export function selectFielder(
  game: LiveGameState,
  fielder: DefensivePosition
): LiveGameState {
  return {
    ...game,
    fielder,
  };
}