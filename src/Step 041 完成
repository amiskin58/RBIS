# PRD - Event Validation

## Purpose

定義 Event 建立時的驗證規則。

所有 Event 在寫入 Event Store 前皆需完成驗證。

----------------------------------------

## Validation Flow

建立 Event
↓
檢查 Event Type
↓
檢查必要欄位
↓
檢查 GameState
↓
檢查規則是否合法
↓
驗證成功
↓
寫入 Event Store

----------------------------------------

## Validation Rules

### Event Type

必須為系統定義之合法 Event。

----------------------------------------

### Required Fields

依 Event 類型檢查必要欄位是否完整。

----------------------------------------

### Game State

確認 Event 是否符合目前比賽狀態。

例如：

- 比賽已結束不可新增 Event
- 三出局後不可再新增 Pitch Event

----------------------------------------

### Rule Validation

確認 Event 符合棒球規則。

例如：

- 跑者不可前進至不存在的壘包
- 打者不可同時產生兩種打擊結果

----------------------------------------

## Functional Requirements

- 所有 Event 必須驗證
- 驗證失敗不得寫入 Event Store
- 顯示驗證失敗原因
- 驗證成功後建立 Event

----------------------------------------

## Out of Scope

- Replay
- Statistics
- 匯出
