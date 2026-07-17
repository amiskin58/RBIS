import type { ReactNode } from "react";

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
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          backgroundColor: "#0b5cab",
          color: "#ffffff",
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        RBIS Score
      </header>

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
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#222222",
          color: "#ffffff",
          fontSize: "14px",
        }}
      >
        RBIS Baseball Information System
      </footer>
    </div>
  );
}

export default MainLayout;
