import { useState } from "react";

function BaseballField() {
  const [point, setPoint] = useState({
    x: 0,
    y: 0,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    setPoint({ x, y });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100%",
        height: "520px",
        background: "#2f7d32",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
        cursor: "crosshair",
      }}
    >
      {/* 座標顯示 */}
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          background: "rgba(0,0,0,.45)",
          padding: "8px 12px",
          borderRadius: 8,
          zIndex: 100,
        }}
      >
        X：{point.x}
        <br />
        Y：{point.y}
      </div>

      {/* 落點 */}
      {point.x !== 0 && (
        <div
          style={{
            position: "absolute",
            left: point.x - 6,
            top: point.y - 6,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "red",
            border: "2px solid white",
            zIndex: 99,
          }}
        />
      )}

      {/* 內野菱形 */}
      <div
        style={{
          width: "180px",
          height: "180px",
          border: "3px solid white",
          position: "absolute",
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
      />

      {/* 本壘 */}
      <div
        style={{
          width: 14,
          height: 14,
          background: "white",
          position: "absolute",
          left: "50%",
          bottom: "80px",
          transform: "translateX(-50%)",
        }}
      />

      {/* 一壘 */}
      <div
        style={{
          width: 14,
          height: 14,
          background: "white",
          position: "absolute",
          right: "calc(50% - 95px)",
          bottom: "170px",
          transform: "rotate(45deg)",
        }}
      />

      {/* 二壘 */}
      <div
        style={{
          width: 14,
          height: 14,
          background: "white",
          position: "absolute",
          left: "50%",
          top: "110px",
          transform: "translateX(-50%) rotate(45deg)",
        }}
      />

      {/* 三壘 */}
      <div
        style={{
          width: 14,
          height: 14,
          background: "white",
          position: "absolute",
          left: "calc(50% - 95px)",
          bottom: "170px",
          transform: "rotate(45deg)",
        }}
      />

      {/* 投手丘 */}
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#c49a6c",
          position: "absolute",
          left: "50%",
          top: "56%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default BaseballField;