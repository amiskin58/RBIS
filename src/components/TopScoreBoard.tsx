type TopScoreBoardProps = {
  inning: number;
  isTop: boolean;
  homeScore: number;
  awayScore: number;
};

function TopScoreBoard({
  inning,
  isTop,
  homeScore,
  awayScore,
}: TopScoreBoardProps) {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        borderRadius: "10px",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {inning}
        {isTop ? "▲" : "▼"}
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        <div>AWAY {awayScore}</div>
        <div>HOME {homeScore}</div>
      </div>
    </div>
  );
}

export default TopScoreBoard;