import type { Game } from "../../types/Game";
import { Link } from "react-router-dom";

interface GameListItemProps {
  game: Game;
  onDelete: (gameId: string) => void;
}

function GameListItem({
  game,
  onDelete,
}: GameListItemProps) {
  const {
    homeTeam,
    awayTeam,
    innings,
  } = game.settings;

  const createdAt = new Date(
    game.createdAt
  ).toLocaleString();

  const handleDelete = () => {
    onDelete(game.id);
  };

  return (
    <div>
      <strong>
        {awayTeam} vs {homeTeam}
      </strong>

      <div>
        {innings} 局制
      </div>

      <div>
        建立時間：{createdAt}
      </div>

        <div>
          <Link to={`/games/${game.id}`}>
            查看
          </Link>

          <button
            type="button"
            onClick={handleDelete}
          >
            刪除
          </button>
        </div>
    </div>
  );
}

export default GameListItem;