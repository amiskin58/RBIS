export type Innings = "5" | "7" | "9";

export type YesNoOption = "yes" | "no";

export interface GameSettings {
  homeTeam: string;
  awayTeam: string;
  innings: Innings;
  gameTime: string;
  mercyRule: string;
  homeDh: YesNoOption;
  awayDh: YesNoOption;
  allowExtraInnings: YesNoOption;
}