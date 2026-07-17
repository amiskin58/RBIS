import type { ReactNode } from "react";
import { COLORS } from "../../constants/Theme";

type FormFieldProps = {
  label: string;
  children: ReactNode;
  required?: boolean;
};

function FormField({
  label,
  children,
  required = false,
}: FormFieldProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        marginBottom: "16px",
      }}
    >
      <label
        style={{
          fontWeight: 600,
          color: COLORS.text,
        }}
      >
        {label}

        {required && (
          <span
            style={{
              marginLeft: "4px",
              color: "#d32f2f",
            }}
          >
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}

export default FormField;