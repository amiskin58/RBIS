type ActionPanelProps = {
  onBall: () => void;
  onStrike: () => void;
  onSingle: () => void;
};

function ActionPanel({ onBall, onStrike,onSingle, }: ActionPanelProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <button
        onClick={onBall}
        style={{
          width: "120px",
          height: "50px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Ball
      </button>
      <button
        onClick={onStrike}
        style={{
          width: "120px",
          height: "50px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Strike
      </button>
      <button
          onClick={onSingle}
          style={{
            width: "120px",
            height: "50px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          1B
      </button>
    </div>
  );
}

export default ActionPanel;