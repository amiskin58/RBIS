import { useState } from "react";

import ButtonGroup from "../components/common/ButtonGroup";
import Card from "../components/common/Card";
import PageTitle from "../components/common/PageTitle";
import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";

import FormField from "../components/form/FormField";
import SelectInput from "../components/form/SelectInput";
import TextInput from "../components/form/TextInput";

import PageContainer from "../components/layout/PageContainer";

import type {
  Innings,
  YesNoOption,
} from "../types/GameSettings";

import { DEFAULT_GAME_SETTINGS } from "../constants/gameSettings";

function CreateGamePage() {
  const [homeTeam, setHomeTeam] = useState(
    DEFAULT_GAME_SETTINGS.homeTeam
  );

  const [awayTeam, setAwayTeam] = useState(
    DEFAULT_GAME_SETTINGS.awayTeam
  );

  const [innings, setInnings] =
    useState<Innings>(
      DEFAULT_GAME_SETTINGS.innings
    );

  const [gameTime, setGameTime] = useState(
    DEFAULT_GAME_SETTINGS.gameTime
  );

  const [mercyRule, setMercyRule] = useState(
    DEFAULT_GAME_SETTINGS.mercyRule
  );

  const [homeDh, setHomeDh] =
    useState<YesNoOption>(
      DEFAULT_GAME_SETTINGS.homeDh
    );

  const [awayDh, setAwayDh] =
    useState<YesNoOption>(
      DEFAULT_GAME_SETTINGS.awayDh
    );

  const [
    allowExtraInnings,
    setAllowExtraInnings,
  ] = useState<YesNoOption>(
    DEFAULT_GAME_SETTINGS.allowExtraInnings
  );

  const handleClear = () => {
    setHomeTeam(DEFAULT_GAME_SETTINGS.homeTeam);
    setAwayTeam(DEFAULT_GAME_SETTINGS.awayTeam);
    setInnings(DEFAULT_GAME_SETTINGS.innings);
    setGameTime(DEFAULT_GAME_SETTINGS.gameTime);
    setMercyRule(DEFAULT_GAME_SETTINGS.mercyRule);
    setHomeDh(DEFAULT_GAME_SETTINGS.homeDh);
    setAwayDh(DEFAULT_GAME_SETTINGS.awayDh);
    setAllowExtraInnings(
      DEFAULT_GAME_SETTINGS.allowExtraInnings
    );
  };

  const handleCreateGame = () => {
    if (homeTeam.trim() === "") {
      alert("請輸入主隊名稱");
      return;
    }

    if (awayTeam.trim() === "") {
      alert("請輸入客隊名稱");
      return;
    }

    if (homeTeam.trim() === awayTeam.trim()) {
      alert("主隊與客隊不可相同");
      return;
    }

    alert("表單驗證成功");
  };

  return (
    <PageContainer>
      <PageTitle>Create</PageTitle>

      <Card>
        <FormField
          label="主隊名稱"
          required
        >
          <TextInput
            type="text"
            placeholder="請輸入主隊名稱"
            value={homeTeam}
            onChange={(event) =>
              setHomeTeam(event.target.value)
            }
          />
        </FormField>

        <FormField
          label="客隊名稱"
          required
        >
          <TextInput
            type="text"
            placeholder="請輸入客隊名稱"
            value={awayTeam}
            onChange={(event) =>
              setAwayTeam(event.target.value)
            }
          />
        </FormField>

        <FormField
          label="比賽局數"
          required
        >
          <SelectInput
            value={innings}
            onChange={(event) =>
              setInnings(event.target.value as Innings)
            }
          >
            <option value="5">5 局</option>
            <option value="7">7 局</option>
            <option value="9">9 局</option>
          </SelectInput>
        </FormField>

        <FormField
          label="比賽時間（分鐘）"
          required
        >
          <TextInput
            type="number"
            min="1"
            value={gameTime}
            onChange={(event) =>
              setGameTime(event.target.value)
            }
          />
        </FormField>

        <FormField
          label="提前結束分差"
          required
        >
          <TextInput
            type="number"
            min="1"
            value={mercyRule}
            onChange={(event) =>
              setMercyRule(event.target.value)
            }
          />
        </FormField>

        <FormField
          label="主隊使用 DH"
          required
        >
          <SelectInput
            value={homeDh}
            onChange={(event) =>
              setHomeDh(event.target.value as YesNoOption)
            }
          >
            <option value="yes">是</option>
            <option value="no">否</option>
          </SelectInput>
        </FormField>

        <FormField
          label="客隊使用 DH"
          required
        >
          <SelectInput
            value={awayDh}
            onChange={(event) =>
              setAwayDh(event.target.value as YesNoOption)
            }
          >
            <option value="yes">是</option>
            <option value="no">否</option>
          </SelectInput>
        </FormField>

        <FormField
          label="允許延長賽"
          required
        >
          <SelectInput
            value={allowExtraInnings}
            onChange={(event) =>
              setAllowExtraInnings(
                event.target.value as YesNoOption
              )
            }
          >
            <option value="yes">是</option>
            <option value="no">否</option>
          </SelectInput>
        </FormField>

        <ButtonGroup>
          <PrimaryButton
            type="button"
            onClick={handleCreateGame}
          >
            建立比賽
          </PrimaryButton>

          <SecondaryButton
            type="button"
            onClick={handleClear}
          >
            清除資料
          </SecondaryButton>
        </ButtonGroup>
      </Card>
    </PageContainer>
  );
}

export default CreateGamePage;