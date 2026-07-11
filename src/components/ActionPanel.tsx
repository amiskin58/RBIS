type ActionPanelProps = {
  onBall: () => void;
};

function ActionPanel({ onBall }: ActionPanelProps) {
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
    </div>
  );
}

export default ActionPanel;