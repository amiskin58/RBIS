import ScoreBoard from "../components/ScoreBoard";
import BaseballField from "../components/BaseballField";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <ScoreBoard />
      <br />
      <BaseballField />
    </div>
  );
}

export default Home;