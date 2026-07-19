import type { HitResult } from "../types/HitResult";

export const HitResultName: Record<HitResult, string> = {
  OUT: "出局",
  ERROR: "失誤",
  SINGLE: "一壘安打",
  DOUBLE: "二壘安打",
  TRIPLE: "三壘安打",
  HOME_RUN: "全壘打",
  FIELDER_CHOICE: "野手選擇",
};