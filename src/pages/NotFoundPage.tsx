import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import PageTitle from "../components/common/PageTitle";

function NotFoundPage() {
  return (
    <PageContainer>
      <PageTitle>404 - Page Not Found</PageTitle>

      <p>找不到你要前往的頁面。</p>

      <Link to="/">返回首頁</Link>
    </PageContainer>
  );
}

export default NotFoundPage;