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

function CreateGamePage() {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [innings, setInnings] = useState("7");
  const [gameTime, setGameTime] = useState("60");
  const [mercyRule, setMercyRule] = useState("10");
  const [homeDh, setHomeDh] = useState("yes");
  const [awayDh, setAwayDh] = useState("yes");
  const [allowExtraInnings, setAllowExtraInnings] =
    useState("no");

  const handleClear = () => {
    setHomeTeam("");
    setAwayTeam("");
    setInnings("7");
    setGameTime("60");
    setMercyRule("10");
    setHomeDh("yes");
    setAwayDh("yes");
    setAllowExtraInnings("no");
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
              setInnings(event.target.value)
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
              setHomeDh(event.target.value)
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
              setAwayDh(event.target.value)
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
              setAllowExtraInnings(event.target.value)
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