import type { Bases, Player } from "../state/GameState";

export function singleAdvance(
  bases: Bases,
  batter: Player
): {
  bases: Bases;
  score: number;
} {
  return {
    bases: {
      first: batter,
      second: bases.first,
      third: bases.second,
    },
    score: bases.third ? 1 : 0,
  };
}