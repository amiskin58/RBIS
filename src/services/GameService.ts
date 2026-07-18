import type { Game } from "../types/Game";
import type { GameSettings } from "../types/GameSettings";

const GAME_STORAGE_KEY = "rbis-games";

export const getStoredGames = (): Game[] => {
  const storedGames = localStorage.getItem(
    GAME_STORAGE_KEY
  );

  if (!storedGames) {
    return [];
  }

  try {
    const games = JSON.parse(
      storedGames
    ) as Game[];

    return games.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );
  } catch {
    return [];
  }
};

const saveGames = (games: Game[]): void => {
  localStorage.setItem(
    GAME_STORAGE_KEY,
    JSON.stringify(games)
  );
};

export const createGame = (
  settings: GameSettings
): Game => {
  const game: Game = {
    id: crypto.randomUUID(),
    settings: {
      ...settings,
    },
    createdAt: new Date().toISOString(),
  };

  const games = getStoredGames();

  saveGames([...games, game]);

  return game;
};

export const deleteGame = (
  gameId: string
): void => {
  const games = getStoredGames();

  const filteredGames = games.filter(
    (game) => game.id !== gameId
  );

  saveGames(filteredGames);
};

export const getGameById = (
  gameId: string
): Game | undefined => {
  const games = getStoredGames();

  return games.find(
    (game) => game.id === gameId
  );
};