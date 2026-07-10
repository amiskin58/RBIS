function BaseballField() {
  return (
    <div
      style={{
        width: "100%",
        height: "520px",
        background: "#2f7d32",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 外野 */}

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