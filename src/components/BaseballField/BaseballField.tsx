import field from "../../assets/field.png";
import RunnerLayer from "./RunnerLayer";
import type { Bases } from "../../state/GameState";

type BaseballFieldProps = {
  bases: Bases;

  selectingHitLocation: boolean;

  onFieldClick: (
    x: number,
    y: number
  ) => void;
};

export default function BaseballField({
  bases,
  selectingHitLocation,
  onFieldClick,
}: BaseballFieldProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        onClick={(e) => {
          if (!selectingHitLocation) return;

          const rect =
            e.currentTarget.getBoundingClientRect();

          const x =
            ((e.clientX - rect.left) / rect.width) * 1024;

          const y =
            ((e.clientY - rect.top) / rect.height) * 1024;

          onFieldClick(x, y);
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          aspectRatio: "1 / 1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={field}
          alt="Baseball Field"
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />

        <RunnerLayer
          first={bases.first}
          second={bases.second}
          third={bases.third}
        />
        {selectingHitLocation && (
          <div
            style={{
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#ff9800",
              color: "white",
              padding: "8px 16px",
              borderRadius: 8,
              fontWeight: "bold",
              pointerEvents: "none",
            }}
          >
            請點擊球場選擇落點
          </div>
        )}
      </div>
    </div>
  );
}