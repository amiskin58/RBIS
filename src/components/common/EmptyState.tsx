import type { ReactNode } from "react";
import { COLORS } from "../../constants/Theme";

type EmptyStateProps = {
  message: string;
  action?: ReactNode;
};

function EmptyState({
  message,
  action,
}: EmptyStateProps) {
  return (
    <div
      style={{
        padding: "32px 20px",
        textAlign: "center",
        color: COLORS.text,
        border: `1px dashed ${COLORS.border}`,
        borderRadius: "8px",
      }}
    >
      <p
        style={{
          margin: action ? "0 0 16px 0" : 0,
        }}
      >
        {message}
      </p>

      {action}
    </div>
  );
}

export default EmptyState;