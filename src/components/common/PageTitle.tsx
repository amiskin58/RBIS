import type { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
  return (
    <h1
      style={{
        margin: "0 0 20px 0",
        fontSize: "2rem",
        fontWeight: 700,
      }}
    >
      {children}
    </h1>
  );
}

export default PageTitle;