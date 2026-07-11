import { FIELD_POSITION } from "./FieldPosition";
import type { Player } from "../../models/Player";

type RunnerLayerProps = {
  first: Player | null;
  second: Player | null;
  third: Player | null;
};

export default function RunnerLayer({
  first,
  second,
  third,
}: RunnerLayerProps) {
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
      {first && (
        <circle
          cx={FIELD_POSITION.first.x}
          cy={FIELD_POSITION.first.y}
          r="14"
          fill="#1976d2"
          stroke="white"
          strokeWidth="3"
        />
      )}

      {second && (
        <circle
          cx={FIELD_POSITION.second.x}
          cy={FIELD_POSITION.second.y}
          r="14"
          fill="#1976d2"
          stroke="white"
          strokeWidth="3"
        />
      )}

      {third && (
        <circle
          cx={FIELD_POSITION.third.x}
          cy={FIELD_POSITION.third.y}
          r="14"
          fill="#1976d2"
          stroke="white"
          strokeWidth="3"
        />
      )}
    </svg>
  );
}