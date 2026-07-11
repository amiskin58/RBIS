import type { PlayEvent } from "../models/PlayEvent";

type SidePanelProps = {
  balls: number;
  strikes: number;
  outs: number;
  inning: number;
  isTop: boolean;
  pitchCount: number;
  history: PlayEvent[];
};

type DotProps = {
  active: boolean;
  color: string;
};

function Dot({ active, color }: DotProps) {
  return (
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: active ? color : "#d9d9d9",
        border: "1px solid #888",
      }}
    />
  );
}

function Row({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "30px 1fr",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          color,
        }}
      >
        {label}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SidePanel({
  balls,
  history,
  outs,
  inning,
  isTop,
  pitchCount,
  strikes,
}: SidePanelProps) {
  const currentHistory = history.filter(
    (play) =>
      play.inning === inning &&
      play.isTop === isTop
  );


  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ================= BSO ================= */}

      <Row label="B" color="#2ecc71">
        {[1, 2, 3].map((n) => (
          <Dot
            key={n}
            active={balls >= n}
            color="#2ecc71"
          />
        ))}
      </Row>

      <Row label="S" color="#f1c40f">
        <Dot active={strikes >= 1} color="#f1c40f" />
        <Dot active={strikes >= 2} color="#f1c40f" />
      </Row>

      <Row label="O" color="#e53935">
        <Dot active={outs >= 1} color="#e53935" />
        <Dot active={outs >= 2} color="#e53935" />
      </Row>


      {/* ================= GAME ================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr",
          rowGap: "8px",
          columnGap: "10px",
          fontSize: "15px",
          marginBottom: "15px",
          textAlign: "left",
        }}
      >
        <strong>INNING</strong>
        <span>
          {inning}
          {isTop ? "▲" : "▼"}
        </span>

        <strong>PITCH</strong>
        <span>{pitchCount}</span>

        <strong>BATTER</strong>
        <span>#23 王小明</span>

        <strong>PITCHER</strong>
        <span>#18 林志強</span>
       
      </div>

      <hr />

      {/* ================= LAST PLAY ================= */}

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "220px",
        overflowY: "auto",
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "8px",
        boxSizing: "border-box",
      }}
    >
        <strong
          style={{
            marginBottom: "10px",
            fontSize: "18px",
          }}
        >
          LAST PLAY
        </strong>

        {currentHistory.length === 0 ? (
          <span style={{ color: "#999" }}>
            No Play
          </span>
        ) : (
          currentHistory.map((play, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "6px 0",
              borderBottom: "1px solid #eee",
              fontSize: "15px",
              fontFamily: "monospace",
            }}
          >
            <span
              style={{
                width: "36px",
                textAlign: "right",
                fontWeight: 600,
              }}
            >
              {String(play.pitch).padStart(3, "0")}
            </span>

            <span>
              {play.text}
            </span>
          </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SidePanel;