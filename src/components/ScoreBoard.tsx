import BallStrikeOut from "./BallStrikeOut";

function ScoreBoard() {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <span>跑跑人 🆚 對手</span>
        <span>0 : 0</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12px",
          fontSize: "18px",
        }}
      >
        <span>1局上</span>

<BallStrikeOut
  ball={2}
  strike={1}
  out={0}
/>
      </div>
    </div>
  );
}

export default ScoreBoard;