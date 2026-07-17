import { ROUTES } from "./RoutePath";

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    path: ROUTES.home,
    end: true,
  },
  {
    label: "Games",
    path: ROUTES.games,
  },
  {
    label: "Create",
    path: ROUTES.create,
  },
  {
    label: "Lineup",
    path: ROUTES.lineup,
  },
  {
    label: "Live",
    path: ROUTES.live,
  },
  {
    label: "Replay",
    path: ROUTES.replay,
  },
  {
    label: "Box Score",
    path: ROUTES.boxScore,
  },
  {
    label: "Export",
    path: ROUTES.export,
  },
  {
    label: "Settings",
    path: ROUTES.settings,
  },
] as const;