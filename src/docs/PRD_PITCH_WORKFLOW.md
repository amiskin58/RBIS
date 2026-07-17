# PRD - Pitch Workflow

## Purpose

定義 Pitch（每一球）的操作流程。

所有 Pitch 操作皆建立新的 Event。

----------------------------------------

## Workflow

開始一球
↓
選擇 Pitch 類型
↓
建立 Pitch Event
↓
更新 Count（B / S）
↓
檢查是否形成保送或三振
↓
更新 GameState
↓
等待下一球

----------------------------------------

## Pitch Types

包含：

- Ball
- Called Strike
- Swing Strike
- Foul Ball
- Hit By Pitch
- Intentional Walk

----------------------------------------

## Functional Requirements

- 每次操作建立一筆 Pitch Event
- 即時更新 Ball / Strike
- 即時更新投球數
- 四壞保送時自動建立 Walk Event
- 三振時自動建立 Strikeout Event
- 完成後等待下一球

----------------------------------------

## Out of Scope

- 打擊結果
- 跑壘事件
- 換人
