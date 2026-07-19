import { useState } from "react";
import { useParams } from "react-router-dom";

import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import PageContainer from "../components/layout/PageContainer";

import { getGameById } from "../services/GameService";
import { INITIAL_LIVE_GAME_STATE } from "../constants/InitialLiveGameState";
import { recordEvent } from "../services/GameService";

function LiveScorePage() {
  const { gameId } = useParams<{
    gameId: string;
  }>();

  const getEventText = (type: string) => {
  switch (type) {
    case "BALL":
      return "壞球";
    case "STRIKE":
      return "好球";
    case "FOUL":
      return "界外球";
    case "OUT":
      return "出局";
    case "WALK":
      return "四壞保送";
    case "HBP":
      return "觸身球";
    case "SINGLE":
      return "一壘安打";
    case "DOUBLE":
      return "二壘安打";
    case "TRIPLE":
      return "三壘安打";
    case "HOME_RUN":
      return "全壘打";
    case "ERROR":
      return "失誤";
    case "FIELDERS_CHOICE":
      return "野手選擇";
    case "DOUBLE_PLAY":
      return "雙殺";
    case "SAC_FLY":
      return "高飛犧牲打";
    case "SAC_BUNT":
      return "犧牲短打";
    case "WILD_PITCH":
      return "暴投";
    case "PASSED_BALL":
      return "捕逸";
    case "BALK":
      return "投手犯規";
    case "DROPPED_THIRD_STRIKE":
      return "不死三振";
    default:
      return type;
  }
};
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
      return recordEvent(
        advanceForcedRunners(previous),
        "BALL"
      );
    }

    const newState = {
      ...previous,
      balls: previous.balls + 1,
    };

    return recordEvent(
      newState,
      "BALL"
    );
  });
};

const handleStrike = () => {
  setLiveGame((previous) => {
    if (previous.strikes === 2) {
      return recordEvent(
        recordOut(previous),
        "STRIKE"
      );
    }

    const newState = {
      ...previous,
      strikes: previous.strikes + 1,
    };

    return recordEvent(
      newState,
      "STRIKE"
    );
  });
};

const handleFoul = () => {
  setLiveGame((previous) => {
    if (previous.strikes >= 2) {
      return recordEvent(
        previous,
        "FOUL"
      );
    }

    const newState = {
      ...previous,
      strikes: previous.strikes + 1,
    };

    return recordEvent(
      newState,
      "FOUL"
    );
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

const handleReachFirst = (
  eventType: "HBP" | "WALK"
) => {
  setLiveGame((previous) => {
    const newState = advanceForcedRunners(previous);

    return recordEvent(
      newState,
      eventType
    );
  });
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
      const handleCatcherInterference = () => {
        handleReachFirst("HBP");
      };   



    const handleDroppedThirdStrike = () => {
      setLiveGame((previous) => {
        const canAdvance =
          previous.strikes === 2 &&
          (!previous.runnerOnFirst || previous.outs === 2);

        if (!canAdvance) {
          return previous;
        }

        const newState = {
          ...previous,
          balls: 0,
          strikes: 0,
          runnerOnFirst: true,
        };

        return recordEvent(
          newState,
          "DROPPED_THIRD_STRIKE"
        );
      });
    };

    const handleDroppedThirdStrikeOut = () => {
      setLiveGame((previous) => {
        if (previous.strikes !== 2) {
          return previous;
        }

        const newState = recordOut(previous);

        return recordEvent(
          newState,
          "OUT"
        );
      });
    };

    const handleIntentionalWalk = () => {
      handleReachFirst("WALK");
    }; 

    const handleNoPitch = () => {
      setLiveGame((previous) => previous);
    };

    const handleDeadBall = () => {
      setLiveGame((previous) => previous);
    };

    const handleTimeout = () => {
      setLiveGame((previous) => previous);
    };



    const handleGameDelay = () => {
      setLiveGame((previous) => previous);
    };

    const handleGameResumed = () => {
      setLiveGame((previous) => previous);
    };

    const handleRainDelay = () => {
      setLiveGame((previous) => previous);
    };

    const handleSuspendedGame = () => {
      setLiveGame((previous) => previous);
    };
    const handleHitByPitch = () => {
      handleReachFirst("HBP");
    };


    const handleWalk = () => {
      handleReachFirst("WALK");
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
      setLiveGame((previous) => {
        const newState =
          advanceRunnersOneBase(previous);

        return recordEvent(
          newState,
          "SINGLE"
        );
      });
    };

const handleError = () => {
  setLiveGame((previous) => {
    const newState =
      advanceRunnersOneBase(previous);

    return recordEvent(
      newState,
      "ERROR"
    );
  });
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
            return recordEvent(
                stateAfterOut,
                "FIELDERS_CHOICE"
            );
        }

        const newState = {
          ...stateAfterOut,
          runnerOnFirst: true,
          runnerOnSecond: previous.runnerOnSecond,
          runnerOnThird: previous.runnerOnThird,
        };

        return recordEvent(
          newState,
          "FIELDERS_CHOICE"
        );
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
          return recordEvent(
            stateAfterTwoOuts,
            "DOUBLE_PLAY"
          );
        }

        const newState = {
          ...stateAfterTwoOuts,
          runnerOnFirst: false,
          runnerOnSecond: previous.runnerOnSecond,
          runnerOnThird: previous.runnerOnThird,
        };

        return recordEvent(
          newState,
          "DOUBLE_PLAY"
        );
      });
    };

    const handleSacrificeFly = () => {
      setLiveGame((previous) => {
        const stateAfterOut = recordOut(previous);
        if (previous.outs === 2) {
          return recordEvent(
            stateAfterOut,
            "SAC_FLY"
          );
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

        const newState = {
          ...stateAfterOut,
          runnerOnThird: false,
          awayScore,
          homeScore,
        };

          return recordEvent(
            newState,
            "SAC_FLY"
          );
      });
    };

    const handleSacrificeBunt = () => {
      setLiveGame((previous) => {
        const stateAfterOut = recordOut(previous);

        if (previous.outs === 2) {
          return recordEvent(
            stateAfterOut,
            "SAC_BUNT"
          );
        }

      const newState = {
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

      return recordEvent(
        newState,
        "SAC_BUNT"
      );
            });
    };

    const handleWildPitch = () => {
      setLiveGame((previous) => {
        const newState =
          advanceAllRunnersOneBase(previous);

        return recordEvent(
          newState,
          "WILD_PITCH"
        );
      });
    };

    const handlePassedBall = () => {
      setLiveGame((previous) => {
        const newState =
          advanceAllRunnersOneBase(previous);

        return recordEvent(
          newState,
          "PASSED_BALL"
        );
      });
    };

    const handleBalk = () => {
      setLiveGame((previous) => {
        const newState =
          advanceAllRunnersOneBase(previous);

        return recordEvent(
          newState,
          "BALK"
        );
      });
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
            homeScore += 1;
          }
        };

        if (previous.runnerOnThird) {
          scoreRun();
        }

        if (previous.runnerOnSecond) {
          scoreRun();
        }

          const newState = {
            ...previous,
            balls: 0,
            strikes: 0,
            runnerOnFirst: false,
            runnerOnSecond: true,
            runnerOnThird: previous.runnerOnFirst,
            awayScore,
            homeScore,
          };

          return recordEvent(
            newState,
            "DOUBLE"
          );
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

          const newState = {
            ...previous,
            balls: 0,
            strikes: 0,
            runnerOnFirst: false,
            runnerOnSecond: false,
            runnerOnThird: true,
            awayScore,
            homeScore,
          };

          return recordEvent(
            newState,
            "TRIPLE"
          );
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

    const handleClearEvents = () => {
      setLiveGame((previous) => ({
        ...previous,
        events: [],
        lastEventId: 0,
      }));
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

          const newState = {
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

          return recordEvent(
            newState,
            "HOME_RUN"
          );
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
          onClick={handleNoPitch}
        >
          No Pitch
        </button>

        <button
          type="button"
          onClick={handleDeadBall}
        >
          Dead Ball
        </button>

        <button
          type="button"
          onClick={handleTimeout}
        >
          Timeout
        </button>

        <button
          type="button"
          onClick={handleGameDelay}
        >
          Game Delay
        </button>

        <button
          type="button"
          onClick={handleGameResumed}
        >
          Game Resumed
        </button>

        <button
          type="button"
          onClick={handleRainDelay}
        >
          Rain Delay
        </button>
        
        <button
          type="button"
          onClick={handleSuspendedGame}
        >
          Suspended Game
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
          onClick={() => handleReachFirst("WALK")}
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
          onClick={handleIntentionalWalk}
        >
          Intentional Walk
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
          onClick={handleCatcherInterference}
        >
          Catcher Interference
        </button>

        <button
          type="button"
          onClick={handleDroppedThirdStrike}
        >
          Dropped Third Strike
        </button>

        <button
          type="button"
          onClick={handleDroppedThirdStrikeOut}
        >
          Dropped Third Strike Out
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
          onClick={handleClearEvents}
          disabled={liveGame.events.length === 0}
        >
          Clear Events
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

        <h3>比賽紀錄</h3>
        <div>
          共 {liveGame.events.length} 筆事件
        </div>
        {liveGame.events.length === 0 ? (
          <div>尚無紀錄</div>
        ) : (
            <ul
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                border: "1px solid #ccc",
                padding: "10px",
                marginTop: "10px",
              }}
            >
            {liveGame.events
              .slice(-10)
              .reverse()
              .map((event, index) => (
              <li key={event.id}>
                #{liveGame.events.length - index}
                {" "}
                第 {event.inning} 局
                {event.isTop ? "上" : "下"}
                │
                {getEventText(event.type)}
              </li>
              ))}
          </ul>
        )}

        <div>
          比賽 ID：{game.id}
        </div>
      </>
    </PageContainer>
  );
}

export default LiveScorePage;