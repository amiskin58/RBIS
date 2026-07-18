import type { GameSettings } from "./GameSettings";

export interface Game {
  id: string;
  settings: GameSettings;
  createdAt: string;
}