type SidePanelProps = {
  balls: number;
  lastPlay: string[];
};

type DotProps = {
  active: boolean;
  color: string;
};

function Dot({ active, color }: DotProps) {
  return (
    <div
      style={{
        width: 18,
        height: 18,
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
          fontSize: "22px",
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
  lastPlay,
}: SidePanelProps) {
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

      <h2
        style={{
          textAlign: "center",
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        BSO
      </h2>

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
        <Dot active={false} color="#f1c40f" />
        <Dot active={false} color="#f1c40f" />
      </Row>

      <Row label="O" color="#e53935">
        <Dot active={false} color="#e53935" />
        <Dot active={false} color="#e53935" />
      </Row>

      <hr />

      {/* ================= GAME ================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "90px 1fr",
          rowGap: "10px",
          fontSize: "17px",
          marginBottom: "15px",
        }}
      >
        <strong>INNING</strong>
        <span>1▲</span>

        <strong>PITCH</strong>
        <span>0</span>
      </div>

      <hr />

      {/* ================= PLAYER ================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "90px 1fr",
          rowGap: "10px",
          fontSize: "17px",
          marginBottom: "15px",
        }}
      >
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
          flex: 1,
          overflowY: "auto",
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

        {lastPlay.length === 0 ? (
          <span style={{ color: "#999" }}>
            No Play
          </span>
        ) : (
          lastPlay.map((play, index) => (
            <div
              key={index}
              style={{
                padding: "6px 0",
                borderBottom: "1px solid #eee",
                fontSize: "15px",
              }}
            >
              {index + 1}. {play}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SidePanel;