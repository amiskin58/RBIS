import EmptyState from "../components/common/EmptyState";
import PageContainer from "../components/layout/PageContainer";
import PageTitle from "../components/common/PageTitle";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";
import { ROUTES } from "../constants/RoutePath";

function GameListPage() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <PageTitle>Games</PageTitle>

      <EmptyState
        message="目前尚無比賽資料。"
        action={
          <PrimaryButton
            onClick={() => navigate(ROUTES.create)}
          >
            建立第一場比賽
          </PrimaryButton>
        }
      />
    </PageContainer>
  );
}

export default GameListPage;
