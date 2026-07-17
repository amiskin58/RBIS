import type { ReactNode } from "react";
import { COLORS } from "../../constants/Theme";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;