import type { ButtonHTMLAttributes, ReactNode } from "react";
import { COLORS } from "../../constants/Theme";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function PrimaryButton({
  children,
  style,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: COLORS.primary,
        color: COLORS.primaryText,
        border: "none",
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

export default PrimaryButton;