# PRD - Event Type Catalog

## Purpose

定義 RBIS Score 中所有 Event Type 的分類與用途。

所有 Event 必須屬於系統定義的 Event Type。

----------------------------------------

## Event Categories

包含：

- Game Event
- Pitch Event
- Play Event
- Runner Event
- Substitution Event
- Correction Event
- System Event

----------------------------------------

## Game Event

包含：

- Game Start
- Game Suspend
- Game Resume
- Finish Game

----------------------------------------

## Pitch Event

包含：

- Ball
- Called Strike
- Swing Strike
- Foul Ball
- Hit By Pitch
- Intentional Walk

----------------------------------------

## Play Event

包含：

- Single
- Double
- Triple
- Home Run
- Error
- Out
- Fielder's Choice
- Sacrifice Fly
- Sacrifice Bunt

----------------------------------------

## Runner Event

包含：

- Advance
- Return
- Steal
- Double Steal
- Caught Stealing
- Pickoff
- Wild Pitch
- Passed Ball
- Balk
- Score

----------------------------------------

## Substitution Event

包含：

- Pinch Hitter
- Pinch Runner
- Defensive Replacement
- Pitching Change

----------------------------------------

## Correction Event

包含：

- Correction
- Cancel Event

----------------------------------------

## System Event

包含：

- Undo
- Replay Rebuild
- Statistics Rebuild

----------------------------------------

## Functional Requirements

- 每個 Event 必須有唯一 Event Type
- Event Type 必須屬於一個 Category
- 支援後續新增 Event Type
- Event Validation 必須依 Event Type 驗證

----------------------------------------

## Out of Scope

- Database Enum
- API 定義
- 雲端同步
