# PRD - Action Panel

## Purpose

Action Panel 提供比賽進行中的所有操作入口。

所有操作皆建立新的 Event，不直接修改 GameState。

----------------------------------------

## Layout

Action Panel 分為五個區域：

- Pitch
- Play
- Runner
- Substitution
- Game Control

----------------------------------------

## Pitch

包含：

- Ball
- Called Strike
- Swing Strike
- Foul
- Hit By Pitch
- Intentional Walk

----------------------------------------

## Play

包含：

- Single
- Double
- Triple
- Home Run
- Error
- Out
- Sacrifice
- Fielder's Choice

----------------------------------------

## Runner

包含：

- Steal
- Wild Pitch
- Passed Ball
- Balk
- Pickoff
- Advance
- Return

----------------------------------------

## Substitution

包含：

- Pinch Hitter
- Pinch Runner
- Defensive Change
- Pitching Change

----------------------------------------

## Game Control

包含：

- Undo
- Redo（預留）
- Finish Game

----------------------------------------

## Functional Requirements

- 所有操作建立 Event
- 操作完成後立即更新畫面
- 支援觸控操作
- 支援快速連續操作

----------------------------------------

## Out of Scope

- Replay
- Export
- Statistics
