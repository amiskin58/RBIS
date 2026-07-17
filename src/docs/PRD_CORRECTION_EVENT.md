# PRD - Correction Event

## Purpose

定義比賽紀錄修正（Correction Event）的流程。

所有修正皆以新增 Correction Event 的方式進行，不直接修改既有 Event。

----------------------------------------

## Workflow

選擇欲修正的 Event
↓
建立 Correction Event
↓
標記原 Event 為已修正
↓
重新建構 GameState
↓
重新計算 Statistics
↓
重新產生 Replay
↓
更新 UI

----------------------------------------

## Correction Rules

- 不得直接修改原始 Event
- 每次修正皆建立新的 Correction Event
- 原始 Event 必須保留完整歷史紀錄
- Correction Event 必須記錄修正原因（如有）

----------------------------------------

## Event Status

每筆 Event 狀態包含：

- Active
- Corrected
- Cancelled

----------------------------------------

## Functional Requirements

- 支援指定 Event 修正
- 保留完整修正歷程
- 自動重新建構 GameState
- 自動重新計算 Statistics
- 自動更新 Replay
- 自動更新 UI

----------------------------------------

## Out of Scope

- 永久刪除 Event
- Replay 動畫
- 雲端同步
