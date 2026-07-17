# PRD - GameState Schema

## Purpose

定義 RBIS Score 中 GameState 的資料結構。

GameState 為 Event 套用後的運算結果，不可直接修改。

----------------------------------------

## GameState

包含：

- Game ID
- Inning
- Half Inning
- Ball
- Strike
- Out

----------------------------------------

## Score

包含：

- Home Score
- Away Score
- Home Inning Score
- Away Inning Score
- Hits
- Errors

----------------------------------------

## Bases

包含：

- First Base
- Second Base
- Third Base

各壘包記錄目前跑者 ID。

----------------------------------------

## Current Players

包含：

- Current Batter
- Current Pitcher

----------------------------------------

## Team Status

包含：

- Offensive Team
- Defensive Team

----------------------------------------

## Lineup

包含：

- Home Lineup
- Away Lineup

----------------------------------------

## Functional Requirements

- GameState 僅由 Event 推導
- 不得直接修改 GameState
- 每次 Event 後立即更新
- 保持資料一致性
- 支援 Replay 重建

----------------------------------------

## Out of Scope

- Statistics
- Database Schema
- Cloud Sync
