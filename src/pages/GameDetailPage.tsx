import { Link, useParams } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import EmptyState from "../components/common/EmptyState";
import PageContainer from "../components/layout/PageContainer";

import { getGameById } from "../services/GameService";


function GameDetailPage() {
  const { gameId } = useParams<{
    gameId: string;
  }>();

  const game = gameId
    ? getGameById(gameId)
    : undefined;

  if (!game) {
    return (
      <PageContainer>
        <PageTitle>比賽詳細資料</PageTitle>

        <EmptyState
          message="找不到這場比賽。"
        />
      </PageContainer>
    );
  }

  const {
    homeTeam,
    awayTeam,
    innings,
  } = game.settings;

  return (
    <PageContainer>
      <PageTitle>比賽詳細資料</PageTitle>

      <div>
        <strong>
          {awayTeam} vs {homeTeam}
        </strong>
      </div>

      <div>
        局數：{innings} 局
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <Link to={`/live/${game.id}`}>
          開始比賽
        </Link>
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <Link to="/games">
          返回比賽清單
        </Link>
      </div>
    </PageContainer>
  );
}

export default GameDetailPage;