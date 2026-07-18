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
}