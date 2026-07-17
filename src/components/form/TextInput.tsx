import type { InputHTMLAttributes } from "react";
import { COLORS } from "../../constants/Theme";

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInput({
  style,
  ...props
}: TextInputProps) {
  return (
    <input
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
    />
  );
}

export default TextInput;