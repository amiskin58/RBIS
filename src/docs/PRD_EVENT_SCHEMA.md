# PRD - Event Schema

## Purpose

定義 RBIS Score 中所有 Event 的共用資料結構。

所有 Event 均遵循相同 Schema，以確保資料一致性與可重建性。

----------------------------------------

## Event Schema

每筆 Event 包含：

- Event ID
- Game ID
- Event Sequence
- Event Type
- Timestamp
- Inning
- Half Inning
- Batter ID
- Pitcher ID
- Payload
- Status

----------------------------------------

## Payload

Payload 依不同 Event Type 包含不同內容。

例如：

Pitch Event：

- Pitch Type
- Pitch Result

Play Event：

- Hit Location
- Ball Type
- Fielder
- Play Result

Runner Event：

- Runner ID
- Runner Action
- From Base
- To Base

Substitution Event：

- Out Player
- In Player
- Position

----------------------------------------

## Event Status

包含：

- Active
- Corrected
- Cancelled

----------------------------------------

## Functional Requirements

- 所有 Event 使用統一 Schema
- Payload 支援不同 Event Type 擴充
- Event ID 必須唯一
- Event Sequence 必須唯一
- Status 必須記錄目前狀態

----------------------------------------

## Out of Scope

- Database Schema
- API Schema
- Cloud Sync
