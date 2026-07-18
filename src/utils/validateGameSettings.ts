import type { GameSettings } from "../types/GameSettings";

export const validateGameSettings = (
  settings: GameSettings
): string | null => {
  if (settings.homeTeam.trim() === "") {
    return "請輸入主隊名稱";
  }

  if (settings.awayTeam.trim() === "") {
    return "請輸入客隊名稱";
  }

  if (
    settings.homeTeam.trim() ===
    settings.awayTeam.trim()
  ) {
    return "主隊與客隊不可相同";
  }

  const gameTime = Number(settings.gameTime);

    if (
    settings.gameTime.trim() === "" ||
    Number.isNaN(gameTime) ||
    gameTime <= 0 ||
    !Number.isInteger(gameTime)
    ) {
    return "比賽時間必須為大於 0 的整數";
    }

    const mercyRule = Number(settings.mercyRule);

    if (
    settings.mercyRule.trim() === "" ||
    Number.isNaN(mercyRule) ||
    mercyRule <= 0 ||
    !Number.isInteger(mercyRule)
    ) {
    return "提前結束分差必須為大於 0 的整數";
    }

  return null;
};