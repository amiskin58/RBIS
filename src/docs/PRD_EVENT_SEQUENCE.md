# PRD - Event Sequence

## Purpose

定義 RBIS Score 中 Event Sequence 的產生與管理規則。

Event Sequence 為每場比賽中 Event 的唯一順序識別，不因修正或重建而改變。

----------------------------------------

## Sequence Rules

- 每場比賽從 1 開始編號
- 每新增一筆 Event，Sequence +1
- Sequence 在同一場比賽中不可重複
- Sequence 一經建立不可修改

----------------------------------------

## Event Ordering

所有 Event 依下列順序處理：

1. Event Sequence
2. Timestamp（僅供顯示）
3. Event ID（必要時作為唯一識別）

Replay、Statistics 與 GameState 重建皆以 Event Sequence 為準。

----------------------------------------

## Correction Event

Correction Event：

- 擁有新的 Event Sequence
- 不修改原 Event Sequence
- 原始 Event 保留於歷史紀錄
- 重建時依 Status 決定是否套用

----------------------------------------

## Functional Requirements

- 自動產生 Event Sequence
- 保證 Sequence 唯一
- 支援依 Sequence 重建比賽
- 支援 Correction Event
- 支援依 Sequence 快速查詢 Event

----------------------------------------

## Out of Scope

- Database Auto Increment
- 分散式 Sequence
- 多場比賽同步排序
