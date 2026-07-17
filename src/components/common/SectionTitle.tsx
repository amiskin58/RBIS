import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      style={{
        margin: "0 0 12px 0",
        fontSize: "1.25rem",
        fontWeight: 700,
      }}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;