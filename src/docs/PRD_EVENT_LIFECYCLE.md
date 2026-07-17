# PRD - Event Lifecycle

## Purpose

定義 Event 從建立到完成的完整生命週期。

所有比賽資料皆由 Event 驅動。

----------------------------------------

## Lifecycle

使用者操作
↓
建立 Event
↓
Event Validation
↓
寫入 Event Store
↓
更新 GameState
↓
更新 UI
↓
更新 Statistics
↓
等待下一個 Event

----------------------------------------

## Event Status

每筆 Event 包含：

- Created
- Validated
- Applied
- Completed

----------------------------------------

## Functional Requirements

- 每次操作建立一筆 Event
- Event 必須通過驗證
- Event 不可直接修改
- 所有資料由 Event 自動更新
- Event 保留完整歷史紀錄

----------------------------------------

## Out of Scope

- Replay 控制
- 匯出
- 雲端同步
