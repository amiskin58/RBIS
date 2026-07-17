import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GameListPage from "../pages/GameListPage";
import CreateGamePage from "../pages/CreateGamePage";
import LineupPage from "../pages/LineupPage";
import LiveScorePage from "../pages/LiveScorePage";
import ReplayPage from "../pages/ReplayPage";
import BoxScorePage from "../pages/BoxScorePage";
import ExportPage from "../pages/ExportPage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";
import { ROUTES } from "../constants/RoutePath";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={ROUTES.games} element={<GameListPage />} />
      <Route path={ROUTES.create} element={<CreateGamePage />} />
      <Route path="/lineup" element={<LineupPage />} />
      <Route path="/live" element={<LiveScorePage />} />
      <Route path="/replay" element={<ReplayPage />} />
      <Route path="/box-score" element={<BoxScorePage />} />
      <Route path="/export" element={<ExportPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;

