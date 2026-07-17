import type { SelectHTMLAttributes } from "react";
import { COLORS } from "../../constants/Theme";

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement>;

function SelectInput({
  style,
  children,
  ...props
}: SelectInputProps) {
  return (
    <select
      {...props}
      style={{
        width: "100%",
        padding: "10px 12px",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "6px",
        backgroundColor: "#ffffff",
        color: COLORS.text,
        outline: "none",
        ...style,
      }}
    >
      {children}
    </select>
  );
}

export default SelectInput;