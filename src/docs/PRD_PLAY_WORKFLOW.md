# PRD - Play Workflow

## Purpose

定義打者擊球（Play）的操作流程。

所有 Play 操作皆建立新的 Event。

----------------------------------------

## Workflow

Pitch 完成
↓
選擇擊球落點
↓
選擇球的類型
↓
選擇處理球守備員
↓
選擇 Play 結果
↓
建立 Play Event
↓
更新壘包狀態
↓
更新計分板
↓
等待下一球

----------------------------------------

## Ball Types

包含：

- Fly Ball
- Line Drive
- Ground Ball
- Bunt

----------------------------------------

## Defensive Players

包含：

- P
- C
- 1B
- 2B
- 3B
- SS
- LF
- CF
- RF

----------------------------------------

## Play Results

包含：

- Single
- Double
- Triple
- Home Run
- Out
- Error
- Fielder's Choice
- Sacrifice

----------------------------------------

## Functional Requirements

- 支援球場落點選擇
- 支援球種選擇
- 支援守備員選擇
- 支援 Play 結果選擇
- 建立 Play Event
- 即時更新 GameState

----------------------------------------

## Out of Scope

- 跑壘事件
- 換人
- Replay
