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
      {/* Header */}
      <header
        style={{
          height: "60px",
          background: "#0b5cab",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        RBIS Score
      </header>

      {/* Main */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          background: "#f5f5f5",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          height: "40px",
          background: "#222",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        RBIS Baseball Information System
      </footer>
    </div>
  );
}

export default MainLayout;
