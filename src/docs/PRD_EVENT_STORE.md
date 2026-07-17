# PRD - Event Store

## Purpose

定義 Event Store 的資料儲存規範。

Event Store 為 RBIS Score 的唯一事實來源（Single Source of Truth），所有比賽資料皆由 Event Store 推導。

----------------------------------------

## Event Store Structure

每場比賽包含：

- Game ID
- Event List

每筆 Event 依建立順序儲存。

----------------------------------------

## Event Record

每筆 Event 至少包含：

- Event ID
- Game ID
- Event Sequence
- Event Type
- Timestamp
- Payload
- Status

----------------------------------------

## Storage Rules

- Event 不可覆寫
- Event 不可直接刪除
- Event Sequence 必須唯一且遞增
- Correction Event 以新增方式處理
- Event 順序不可改變

----------------------------------------

## Read Flow

讀取比賽
↓
讀取 Event List
↓
依 Sequence 排序
↓
重建 GameState
↓
更新 UI

----------------------------------------

## Functional Requirements

- 支援依 Game ID 讀取 Event
- 支援依 Sequence 排序
- 支援新增 Event
- 支援 Correction Event
- 保留完整歷史紀錄

----------------------------------------

## Out of Scope

- 雲端同步
- 備份機制
- 資料庫設計
