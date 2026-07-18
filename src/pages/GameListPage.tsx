import { useState } from "react";

import {
  deleteGame,
  getStoredGames,
} from "../services/GameService";

import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import GameListItem from "../components/game/GameListItem";
import PageContainer from "../components/layout/PageContainer";

function GameListPage() {
  const [games, setGames] = useState(
    getStoredGames()
  );

  const handleDelete = (
    gameId: string
  ) => {
    const confirmed = window.confirm(
      "確定要刪除這場比賽嗎？"
    );

    if (!confirmed) {
      return;
    }

    deleteGame(gameId);

    setGames(getStoredGames());
  };

  return (
    <PageContainer>
      <PageTitle>比賽清單</PageTitle>

      {games.length === 0 ? (
        <EmptyState
          message="目前沒有比賽，建立比賽後資料會顯示在這裡。"
        />
      ) : (
        <div>
          {games.map((game) => (
            <GameListItem
              key={game.id}
              game={game}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </PageContainer>
  );
}

export default GameListPage;