import PageTitle from "../components/common/PageTitle";
import SectionTitle from "../components/common/SectionTitle";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/common/Card";
import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";
import ButtonGroup from "../components/common/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/RoutePath";


function HomePage() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <PageTitle>Home</PageTitle>

      <Card>
        <SectionTitle>RBIS 系統</SectionTitle>

        <p>歡迎使用 RBIS 棒球賽事紀錄系統。</p>

        <ButtonGroup>
            <PrimaryButton style={{ minWidth: "140px" }} onClick={() => navigate(ROUTES.create)}>
              開始使用
            </PrimaryButton>

            <SecondaryButton onClick={() => navigate(ROUTES.games)}>
              查看比賽
            </SecondaryButton>
          </ButtonGroup>
      </Card>
    </PageContainer>
  );
}

export default HomePage;