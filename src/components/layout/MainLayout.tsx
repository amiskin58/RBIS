import type { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import { COLORS } from "../../constants/Theme";
import {
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
} from "../../constants/Layout";
import {
  APP_NAME,
  APP_VERSION,
  COPYRIGHT,
} from "../../constants/App";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          height: HEADER_HEIGHT,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          backgroundColor: COLORS.primary,
          color: COLORS.primaryText,
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
         {APP_NAME} {APP_VERSION}
      </header>
      
      <NavigationBar />

      <main
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          height: FOOTER_HEIGHT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#222222",
          color: COLORS.primaryText,
          fontSize: "14px",
        }}
      >
         {COPYRIGHT}
      </footer>
    </div>
  );
}

export default MainLayout;
