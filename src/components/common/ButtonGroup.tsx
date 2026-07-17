import type { ReactNode } from "react";

type ButtonGroupProps = {
  children: ReactNode;
};

function ButtonGroup({ children }: ButtonGroupProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default ButtonGroup;