import type { DefensivePosition } from "../types/DefensivePosition";

export const DefensivePositionName: Record<
  DefensivePosition,
  string
> = {
  P: "投手",
  C: "捕手",
  "1B": "一壘手",
  "2B": "二壘手",
  "3B": "三壘手",
  SS: "游擊手",
  LF: "左外野",
  CF: "中外野",
  RF: "右外野",
};