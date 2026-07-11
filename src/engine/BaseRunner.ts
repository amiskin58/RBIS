import type { Bases, Player } from "../state/GameState";

export function walkAdvance(
  bases: Bases,
  batter: Player
): {
  bases: Bases;
  score: number;
} {
  // 一壘空
  if (!bases.first) {
    return {
      bases: {
        ...bases,
        first: batter,
      },
      score: 0,
    };
  }

  // 一壘有人
  if (!bases.second) {
    return {
      bases: {
        first: batter,
        second: bases.first,
        third: bases.third,
      },
      score: 0,
    };
  }

  // 一、二壘有人
  if (!bases.third) {
    return {
      bases: {
        first: batter,
        second: bases.first,
        third: bases.second,
      },
      score: 0,
    };
  }

  // 滿壘
  return {
    bases: {
      first: batter,
      second: bases.first,
      third: bases.second,
    },
    score: 1,
  };
}