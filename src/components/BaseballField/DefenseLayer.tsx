import { FIELD_POSITION } from "./FieldPosition";

type FielderProps = {
  x: number;
  y: number;
  label: string;
};

function Fielder({
  x,
  y,
  label,
}: FielderProps) {
  return (
    <>
      <circle
        cx={x}
        cy={y}
        r="15"
        fill="#ff9800"
        stroke="white"
        strokeWidth="3"
      />

      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="white"
      >
        {label}
      </text>
    </>
  );
}

export default function DefenseLayer() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
<Fielder
  x={FIELD_POSITION.pitcher.x}
  y={FIELD_POSITION.pitcher.y}
  label="P"
/>
    </svg>
  );
}