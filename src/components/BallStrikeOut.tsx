type Props = {
  ball: number;
  strike: number;
  out: number;
};

function Circle({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: active ? "#4CAF50" : "#D9D9D9",
        border: "1px solid #888",
      }}
    />
  );
}

function BallStrikeOut({ ball, strike, out }: Props) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <div style={{ display: "flex", gap: 6 }}>
        <span>B</span>
        {[1, 2, 3, 4].map((i) => (
          <Circle key={i} active={i <= ball} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 6 }}>
        <span>S</span>
        {[1, 2, 3].map((i) => (
          <Circle key={i} active={i <= strike} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 6 }}>
        <span>O</span>
        {[1, 2, 3].map((i) => (
          <Circle key={i} active={i <= out} />
        ))}
      </div>
    </div>
  );
}

export default BallStrikeOut;