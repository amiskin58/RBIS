# PRD - Runner Workflow

## Purpose

定義跑壘事件（Runner）的操作流程。

所有 Runner 操作皆建立新的 Event。

----------------------------------------

## Workflow

Play 完成
↓
選擇跑者
↓
選擇跑壘事件
↓
建立 Runner Event
↓
更新壘包狀態
↓
更新比分（如有得分）
↓
等待下一球

----------------------------------------

## Runner Events

包含：

- Steal
- Double Steal
- Advance
- Return
- Wild Pitch
- Passed Ball
- Balk
- Pickoff
- Caught Stealing
- Score

----------------------------------------

## Functional Requirements

- 支援選擇跑者
- 支援跑壘事件選擇
- 建立 Runner Event
- 即時更新壘包狀態
- 即時更新得分
- 即時更新 Event History

----------------------------------------

## Out of Scope

- 打擊事件
- 換人
- Replay
