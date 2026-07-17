# PRD - Game Lifecycle State Machine

## Purpose

定義 RBIS Score 中單場比賽的生命週期狀態。

每場比賽皆依固定狀態流轉，不可跳過必要階段。

----------------------------------------

## Game States

包含：

- Created
- Lineup Ready
- In Progress
- Suspended
- Resumed
- Finished
- Archived

----------------------------------------

## State Transition

Created
↓
Lineup Ready
↓
In Progress
↓
Finished
↓
Archived

----------------------------------------

## Optional Transition

In Progress
↓
Suspended
↓
Resumed
↓
In Progress

----------------------------------------

## State Rules

### Created

- 比賽已建立
- 尚未設定完成先發名單

----------------------------------------

### Lineup Ready

- 主客隊先發完成
- 可開始比賽

----------------------------------------

### In Progress

- 可建立 Event
- 可更新 GameState

----------------------------------------

### Suspended

- 暫停比賽
- 不可新增 Event
- 可恢復比賽

----------------------------------------

### Resumed

- 恢復比賽
- 返回 In Progress

----------------------------------------

### Finished

- 建立 Finish Game Event
- 不可新增一般 Event
- 自動產生 Statistics
- 自動產生 Replay
- 自動產生 Box Score

----------------------------------------

### Archived

- 比賽封存
- 唯讀模式
- 不可修改

----------------------------------------

## Functional Requirements

- 每場比賽必須維持單一狀態
- 狀態轉換須符合流程
- Event Validation 必須依目前狀態驗證
- Finished 後禁止新增一般 Event
- Archived 後禁止任何修改

----------------------------------------

## Out of Scope

- 聯盟賽程管理
- 雲端同步
- 權限管理
