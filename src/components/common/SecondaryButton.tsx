import type { ButtonHTMLAttributes, ReactNode } from "react";
import { COLORS } from "../../constants/Theme";

type SecondaryButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
  };

function SecondaryButton({
  children,
  style,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "transparent",
        color: COLORS.primary,
        border: `1px solid ${COLORS.primary}`,
        borderRadius: "6px",
        padding: "10px 18px",
        fontSize: "1rem",
        fontWeight: 600,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;