# PRD - GameState Update

## Purpose

定義 Event 套用後，GameState 的更新流程。

GameState 不可直接修改，僅能由合法 Event 推導產生。

----------------------------------------

## Update Flow

Event 已驗證
↓
讀取目前 GameState
↓
依 Event Type 更新 GameState
↓
重新計算比賽狀態
↓
更新 UI
↓
等待下一個 Event

----------------------------------------

## Update Scope

每次 Event 可更新：

- Ball
- Strike
- Out
- Bases
- Score
- Inning
- Batter
- Pitcher
- Lineup
- Defensive Alignment

----------------------------------------

## Update Rules

- 每個 Event 只更新必要欄位
- 不得直接修改與 Event 無關的資料
- 更新完成後，GameState 應保持一致性

----------------------------------------

## Functional Requirements

- Event 為唯一更新來源
- 每次 Event 更新後立即同步 GameState
- 更新後立即刷新 UI
- 更新流程須保持資料一致性

----------------------------------------

## Out of Scope

- Statistics 計算
- Replay 播放
- 匯出
