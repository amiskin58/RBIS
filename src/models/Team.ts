import type { Pitcher } from "./Pitcher";

export interface Team {
  id: number;

  name: string;

  score: number;

  pitcher: Pitcher | null;
}