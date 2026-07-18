import { HashRouter } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </HashRouter>
  );
}

export default App;