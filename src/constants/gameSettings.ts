import type { GameSettings } from "../types/GameSettings";

export const DEFAULT_GAME_SETTINGS: GameSettings = {
  homeTeam: "",
  awayTeam: "",
  innings: "7",
  gameTime: "60",
  mercyRule: "10",
  homeDh: "yes",
  awayDh: "yes",
  allowExtraInnings: "no",
};