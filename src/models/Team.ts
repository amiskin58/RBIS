import type { Pitcher } from "./Pitcher";

export interface Team {
  name: string;

  score: number;

  pitcher: Pitcher | null;
}