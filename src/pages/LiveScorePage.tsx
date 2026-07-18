import { useState } from "react";
import { useParams } from "react-router-dom";

import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import PageContainer from "../components/layout/PageContainer";

import { getGameById } from "../services/GameService";
import { INITIAL_LIVE_GAME_STATE } from "../constants/InitialLiveGameState";

function LiveScorePage() {
  const { gameId } = useParams<{
    gameId: string;
  }>();

  const game = gameId
    ? getGameById(gameId)
    : undefined;

  const [liveGame, setLiveGame] = useState(
  INITIAL_LIVE_GAME_STATE
);

const advanceForcedRunners = (
  previous: typeof liveGame
) => {
  const isBasesLoaded =
    previous.runnerOnFirst &&
    previous.runnerOnSecond &&
    previous.runnerOnThird;

  return {
    ...previous,
    balls: 0,
    strikes: 0,
    runnerOnThird:
      previous.runnerOnThird ||
      previous.runnerOnSecond,
    runnerOnSecond:
      previous.runnerOnSecond ||
      previous.runnerOnFirst,
    runnerOnFirst: true,
    awayScore:
      isBasesLoaded && previous.isTop
        ? previous.awayScore + 1
        : previous.awayScore,
    homeScore:
      isBasesLoaded && !previous.isTop
        ? previous.homeScore + 1
        : previous.homeScore,
  };
};

const changeSide = (
  previous: typeof liveGame
) => ({
  ...previous,
  inning: previous.isTop
    ? previous.inning
    : previous.inning + 1,
  isTop: !previous.isTop,
  balls: 0,
  strikes: 0,
  outs: 0,
  runnerOnFirst: false,
  runnerOnSecond: false,
  runnerOnThird: false,
});

const recordOut = (
  previous: typeof liveGame
) => {
  if (previous.outs === 2) {
    return changeSide(previous);
  }

  return {
    ...previous,
    balls: 0,
    strikes: 0,
    outs: previous.outs + 1,
  };
};

const recordTwoOuts = (
  previous: typeof liveGame
) => {
  if (previous.outs >= 1) {
    return changeSide(previous);
  }

  return {
    ...previous,
    balls: 0,
    strikes: 0,
    outs: previous.outs + 2,
  };
};

const advanceRunnersOneBase = (
  previous: typeof liveGame
) => ({
  ...previous,
  balls: 0,
  strikes: 0,
  runnerOnFirst: true,
  runnerOnSecond: previous.runnerOnFirst,
  runnerOnThird: previous.runnerOnSecond,
  awayScore:
    previous.runnerOnThird && previous.isTop
      ? previous.awayScore + 1
      : previous.awayScore,
  homeScore:
    previous.runnerOnThird && !previous.isTop
      ? previous.homeScore + 1
      : previous.homeScore,
});

const advanceAllRunnersOneBase = (
  previous: typeof liveGame
) => {
  if (
    !previous.runnerOnFirst &&
    !previous.runnerOnSecond &&
    !previous.runnerOnThird
  ) {
    return previous;
  }

  return {
    ...previous,
    runnerOnFirst: false,
    runnerOnSecond: previous.runnerOnFirst,
    runnerOnThird: previous.runnerOnSecond,
    awayScore:
      previous.runnerOnThird && previous.isTop
        ? previous.awayScore + 1
        : previous.awayScore,
    homeScore:
      previous.runnerOnThird && !previous.isTop
        ? previous.homeScore + 1
        : previous.homeScore,
  };
};

const recordCaughtStealing = (
  previous: typeof liveGame,
  base: "first" | "second" | "third"
) => {
  const hasRunner =
    base === "first"
      ? previous.runnerOnFirst
      : base === "second"
      ? previous.runnerOnSecond
      : previous.runnerOnThird;

  if (!hasRunner) {
    return previous;
  }

  if (previous.outs === 2) {
    return changeSide(previous);
  }

  return {
    ...previous,
    outs: previous.outs + 1,
    runnerOnFirst:
      base === "first"
        ? false
        : previous.runnerOnFirst,
    runnerOnSecond:
      base === "second"
        ? false
        : previous.runnerOnSecond,
    runnerOnThird:
      base === "third"
        ? false
        : previous.runnerOnThird,
  };
};

const recordPickoff = (
  previous: typeof liveGame,
  base: "first" | "second" | "third"
) => {
  return recordCaughtStealing(previous, base);
};

const recordRunnerInterference = (
  previous: typeof liveGame
) => {
  if (
    !previous.runnerOnFirst &&
    !previous.runnerOnSecond &&
    !previous.runnerOnThird
  ) {
    return previous;
  }

  if (previous.outs === 2) {
    return changeSide(previous);
  }

  return {
    ...previous,
    outs: previous.outs + 1,
    runnerOnFirst:
      previous.runnerOnThird ||
      previous.runnerOnSecond
        ? previous.runnerOnFirst
        : false,
    runnerOnSecond: previous.runnerOnThird
      ? previous.runnerOnSecond
      : false,
    runnerOnThird: false,
  };
};

const handleBall = () => {
  setLiveGame((previous) => {
    if (previous.balls === 3) {
      return advanceForcedRunners(previous);
    }

    return {
      ...previous,
      balls: previous.balls + 1,
    };
  });
};

  const handleStrike = () => {
    setLiveGame((previous) => {
      if (previous.strikes === 2) {
        return recordOut(previous);
      }

      return {
        ...previous,
        strikes: previous.strikes + 1,
      };
    });
  };

    const handleFoul = () => {
      setLiveGame((previous) => {
        if (previous.strikes >= 2) {
          return previous;
        }

        return {
          ...previous,
          strikes: previous.strikes + 1,
        };
      });
    };

    const handleOut = () => {
      setLiveGame((previous) =>
        recordOut(previous)
      );
    };

    const handleResetCount = () => {
      setLiveGame((previous) => ({
        ...previous,
        balls: 0,
        strikes: 0,
      }));
    };

    const handleReachFirst = () => {
      setLiveGame((previous) =>
        advanceForcedRunners(previous)
      );
    };

    const handleRunnerInterference = () => {
      setLiveGame((previous) =>
        recordRunnerInterference(previous)
      );
    };

    const handleBatterInterference = () => {
      setLiveGame((previous) =>
        recordOut(previous)
      );
    };

    const handleObstruction = () => {
      setLiveGame((previous) =>
        advanceAllRunnersOneBase(previous)
      );
    };

    const handleDefensiveIndifference = () => {
      setLiveGame((previous) => ({
        ...previous,
        runnerOnThird:
          previous.runnerOnThird ||
          (previous.runnerOnSecond &&
            !previous.runnerOnThird),
        runnerOnSecond:
          (!previous.runnerOnThird &&
            previous.runnerOnSecond) ||
          (previous.runnerOnFirst &&
            !previous.runnerOnSecond),
        runnerOnFirst:
          previous.runnerOnSecond
            ? previous.runnerOnFirst
            : false,
      }));
    };

    const handleHitByPitch = () => {
      handleReachFirst();
    };

    const handleWalk = () => {
      handleReachFirst();
    };

    const handleReachSecond = () => {
      setLiveGame((previous) => ({
        ...previous,
        balls: 0,
        strikes: 0,
        runnerOnSecond: true,
      }));
    };

    const handleReachThird = () => {
      setLiveGame((previous) => ({
        ...previous,
        balls: 0,
        strikes: 0,
        runnerOnThird: true,
      }));
    };

    const handleReachHome = () => {
      setLiveGame((previous) => ({
        ...previous,
        balls: 0,
        strikes: 0,
        awayScore: previous.isTop
          ? previous.awayScore + 1
          : previous.awayScore,
        homeScore: previous.isTop
          ? previous.homeScore
          : previous.homeScore + 1,
      }));
    };

    const handleSingle = () => {
      setLiveGame((previous) =>
        advanceRunnersOneBase(previous)
      );
    };

    const handleError = () => {
      setLiveGame((previous) =>
        advanceRunnersOneBase(previous)
      );
    };

    const handleFieldersChoice = () => {
      setLiveGame((previous) => {
        if (!previous.runnerOnFirst) {
          return {
            ...previous,
            balls: 0,
            strikes: 0,
            runnerOnFirst: true,
          };
        }

        const stateAfterOut = recordOut(previous);

        if (previous.outs === 2) {
          return stateAfterOut;
        }

        return {
          ...stateAfterOut,
          runnerOnFirst: true,
          runnerOnSecond: previous.runnerOnSecond,
          runnerOnThird: previous.runnerOnThird,
        };
      });
    };

    const handleDoublePlay = () => {
      setLiveGame((previous) => {
        if (!previous.runnerOnFirst) {
          return previous;
        }

        const stateAfterTwoOuts =
          recordTwoOuts(previous);

        if (previous.outs >= 1) {
          return stateAfterTwoOuts;
        }

        return {
          ...stateAfterTwoOuts,
          runnerOnFirst: false,
          runnerOnSecond: previous.runnerOnSecond,
          runnerOnThird: previous.runnerOnThird,
        };
      });
    };

    const handleSacrificeFly = () => {
      setLiveGame((previous) => {
        const stateAfterOut = recordOut(previous);

        if (previous.outs === 2) {
          return stateAfterOut;
        }

        let awayScore = previous.awayScore;
        let homeScore = previous.homeScore;

        if (previous.runnerOnThird) {
          if (previous.isTop) {
            awayScore += 1;
          } else {
            homeScore += 1;
          }
        }

        return {
          ...stateAfterOut,
          runnerOnThird: false,
          awayScore,
          homeScore,
        };
      });
    };

    const handleSacrificeBunt = () => {
      setLiveGame((previous) => {
        const stateAfterOut = recordOut(previous);

        if (previous.outs === 2) {
          return stateAfterOut;
        }

        return {
          ...stateAfterOut,
          runnerOnFirst: false,
          runnerOnSecond: previous.runnerOnFirst,
          runnerOnThird: previous.runnerOnSecond,
          awayScore:
            previous.runnerOnThird && previous.isTop
              ? previous.awayScore + 1
              : previous.awayScore,
          homeScore:
            previous.runnerOnThird && !previous.isTop
              ? previous.homeScore + 1
              : previous.homeScore,
        };
      });
    };

    const handleWildPitch = () => {
      setLiveGame((previous) =>
        advanceAllRunnersOneBase(previous)
      );
    };

    const handlePassedBall = () => {
      handleWildPitch();
    };

    const handleBalk = () => {
      setLiveGame((previous) =>
        advanceAllRunnersOneBase(previous)
      );
    };

    const handleStealSecond = () => {
      setLiveGame((previous) => {
        if (
          !previous.runnerOnFirst ||
          previous.runnerOnSecond
        ) {
          return previous;
        }

        return {
          ...previous,
          runnerOnFirst: false,
          runnerOnSecond: true,
        };
      });
    };

    const handleStealThird = () => {
      setLiveGame((previous) => {
        if (
          !previous.runnerOnSecond ||
          previous.runnerOnThird
        ) {
          return previous;
        }

        return {
          ...previous,
          runnerOnSecond: false,
          runnerOnThird: true,
        };
      });
    }; 

    const handleStealHome = () => {
      setLiveGame((previous) => {
        if (!previous.runnerOnThird) {
          return previous;
        }

        return {
          ...previous,
          runnerOnThird: false,
          awayScore: previous.isTop
            ? previous.awayScore + 1
            : previous.awayScore,
          homeScore: !previous.isTop
            ? previous.homeScore + 1
            : previous.homeScore,
        };
      });
    };

    const handleCaughtStealingSecond = () => {
      setLiveGame((previous) =>
        recordCaughtStealing(previous, "first")
      );
    };

    const handleCaughtStealingThird = () => {
      setLiveGame((previous) =>
        recordCaughtStealing(previous, "second")
      );
    };

    const handleCaughtStealingHome = () => {
      setLiveGame((previous) =>
        recordCaughtStealing(previous, "third")
      );
    };

    const handleDouble = () => {
      setLiveGame((previous) => {
        let awayScore = previous.awayScore;
        let homeScore = previous.homeScore;

        const scoreRun = () => {
          if (previous.isTop) {
            awayScore += 1;
          } else {
            homeScore += 1;handlePassedBall
          }
        };

        if (previous.runnerOnThird) {
          scoreRun();
        }

        if (previous.runnerOnSecond) {
          scoreRun();
        }

        return {
          ...previous,
          balls: 0,
          strikes: 0,
          runnerOnFirst: false,
          runnerOnSecond: true,
          runnerOnThird: previous.runnerOnFirst,
          awayScore,
          homeScore,
        };
      });
    };

    const handleTriple = () => {
      setLiveGame((previous) => {
        let awayScore = previous.awayScore;
        let homeScore = previous.homeScore;

        const scoreRun = () => {
          if (previous.isTop) {
            awayScore += 1;
          } else {
            homeScore += 1;
          }
        };

        if (previous.runnerOnFirst) {
          scoreRun();
        }

        if (previous.runnerOnSecond) {
          scoreRun();
        }

        if (previous.runnerOnThird) {
          scoreRun();
        }

        return {
          ...previous,
          balls: 0,
          strikes: 0,
          runnerOnFirst: false,
          runnerOnSecond: false,
          runnerOnThird: true,
          awayScore,
          homeScore,
        };
      });
    };

    const handleClearBases = () => {
      setLiveGame((previous) => ({
        ...previous,
        runnerOnFirst: false,
        runnerOnSecond: false,
        runnerOnThird: false,
      }));
    };

    const handleResetGame = () => {
      setLiveGame({
        ...INITIAL_LIVE_GAME_STATE,
      });
    };

    const handlePickoffFirst = () => {
      setLiveGame((previous) =>
        recordPickoff(previous, "first")
      );
    };

    const handlePickoffSecond = () => {
      setLiveGame((previous) =>
        recordPickoff(previous, "second")
      );
    };

    const handlePickoffThird = () => {
      setLiveGame((previous) =>
        recordPickoff(previous, "third")
      );
    };


    const handleHomeRun = () => {
      setLiveGame((previous) => {
        const runsScored =
          1 +
          Number(previous.runnerOnFirst) +
          Number(previous.runnerOnSecond) +
          Number(previous.runnerOnThird);

        return {
          ...previous,
          balls: 0,
          strikes: 0,
          runnerOnFirst: false,
          runnerOnSecond: false,
          runnerOnThird: false,
          awayScore: previous.isTop
            ? previous.awayScore + runsScored
            : previous.awayScore,
          homeScore: previous.isTop
            ? previous.homeScore
            : previous.homeScore + runsScored,
        };
      });
    };

    const handleMoveToSecond = () => {
      setLiveGame((previous) => ({
        ...previous,
        runnerOnFirst: false,
        runnerOnSecond: true,
      }));
    };

    const handleMoveToThird = () => {
      setLiveGame((previous) => ({
        ...previous,
        runnerOnSecond: false,
        runnerOnThird: true,
      }));
    };

const handleScore = () => {
  setLiveGame((previous) => {
    if (!previous.runnerOnThird) {
      return previous;
    }

    return {
      ...previous,
      runnerOnThird: false,
      awayScore: previous.isTop
        ? previous.awayScore + 1
        : previous.awayScore,
      homeScore: previous.isTop
        ? previous.homeScore
        : previous.homeScore + 1,
    };
  });
};



  if (!game) {

    return (
      <PageContainer>
        <PageTitle>即時計分</PageTitle>

        <EmptyState
          message="找不到這場比賽。"
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>即時計分</PageTitle>

<>
        <div>
          {game.settings.awayTeam}：{liveGame.awayScore}
        </div>

        <div>
          {game.settings.homeTeam}：{liveGame.homeScore}
        </div>

        <div>
          局數：{game.settings.innings} 局
        </div>

        <div>
          目前局數：
          {liveGame.inning}
          {liveGame.isTop ? "局上" : "局下"}
        </div>

        <div>
          B：{liveGame.balls}
        </div>

        <div>
          S：{liveGame.strikes}
        </div>

        <div>
          O：{liveGame.outs}
        </div>

        <div>
          一壘：{liveGame.runnerOnFirst ? "有人" : "無人"}
        </div>

        <div>
          二壘：{liveGame.runnerOnSecond ? "有人" : "無人"}
        </div>

        <div>
          三壘：{liveGame.runnerOnThird ? "有人" : "無人"}
        </div>

        <button
          type="button"
          onClick={handleBall}
        >
          Ball
        </button>

        <button
          type="button"
          onClick={handleStrike}
        >
          Strike
        </button>

        <button
          type="button"
          onClick={handleFoul}
        >
          Foul
        </button>

        <button
          type="button"
          onClick={handleOut}
        >
          Out
        </button>

        <button
          type="button"
          onClick={handleResetCount}
        >
          Reset Count
        </button>

        <button
          type="button"
          onClick={handleReachFirst}
        >
          Reach First
        </button>

        <button
          type="button"
          onClick={handleHitByPitch}
        >
          Hit By Pitch
        </button>

        <button
          type="button"
          onClick={handleWalk}
        >
          Walk
        </button>

        <button
          type="button"
          onClick={handleReachSecond}
        >
          Reach Second
        </button>

        <button
          type="button"
          onClick={handleReachThird}
        >
          Reach Third
        </button>

        <button
          type="button"
          onClick={handleReachHome}
        >
          Reach Home
        </button>

        <button
          type="button"
          onClick={handleSingle}
        >
          Single
        </button>

        <button
          type="button"
          onClick={handleError}
        >
          Error
        </button>

        <button
          type="button"
          onClick={handleFieldersChoice}
        >
          Fielder's Choice
        </button>

        <button
          type="button"
          onClick={handleDoublePlay}
        >
          Double Play
        </button>

        <button
          type="button"
          onClick={handleSacrificeFly}
        >
          Sacrifice Fly
        </button>

        <button
          type="button"
          onClick={handleSacrificeBunt}
        >
          Sacrifice Bunt
        </button>

        <button
          type="button"
          onClick={handleWildPitch}
        >
          Wild Pitch
        </button>

        <button
          type="button"
          onClick={handlePassedBall}
        >
          Passed Ball
        </button>

        <button
          type="button"
          onClick={handleBalk}
        >
          Balk
        </button>

        <button
          type="button"
          onClick={handleRunnerInterference}
        >
          Runner Interference
        </button>

        <button
          type="button"
          onClick={handleBatterInterference}
        >
          Batter Interference
        </button>

        <button
          type="button"
          onClick={handleObstruction}
        >
          Obstruction
        </button>

        <button
          type="button"
          onClick={handleDefensiveIndifference}
        >
          Defensive Indifference
        </button>

        <button
          type="button"
          onClick={handleStealSecond}
        >
          Steal Second
        </button>

        <button
          type="button"
          onClick={handleStealThird}
        >
          Steal Third
        </button>

        <button
          type="button"
          onClick={handleStealHome}
        >
          Steal Home
        </button>

        <button
          type="button"
          onClick={handleCaughtStealingSecond}
        >
          Caught Stealing Second
        </button>

        <button
          type="button"
          onClick={handleCaughtStealingThird}
        >
          Caught Stealing Third
        </button>

        <button
          type="button"
          onClick={handleCaughtStealingHome}
        >
          Caught Stealing Home
        </button>

        <button
          type="button"
          onClick={handlePickoffFirst}
        >
          Pickoff First
        </button>

        <button
          type="button"
          onClick={handlePickoffSecond}
        >
          Pickoff Second
        </button>

        <button
          type="button"
          onClick={handlePickoffThird}
        >
          Pickoff Third
        </button>

        <button
          type="button"
          onClick={handleDouble}
        >
          Double
        </button>

        <button
          type="button"
          onClick={handleTriple}
        >
          Triple
        </button>

        <button
          type="button"
          onClick={handleClearBases}
        >
          Clear Bases
        </button>

        <button
          type="button"
          onClick={handleResetGame}
        >
          Reset Game
        </button>

        <button
          type="button"
          onClick={handleHomeRun}
        >
          Home Run
        </button>

        <button
          type="button"
          onClick={handleMoveToSecond}
        >
          Move to Second
        </button>

        <button
          type="button"
          onClick={handleMoveToThird}
        >
          Move to Third
        </button>

        <button
          type="button"
          onClick={handleScore}
        >
          Score
        </button>

        <div>
          比賽 ID：{game.id}
        </div>
      </>
    </PageContainer>
  );
}

export default LiveScorePage;