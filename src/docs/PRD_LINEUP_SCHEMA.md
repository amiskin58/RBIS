# PRD - Lineup Schema

## Purpose

定義 RBIS Score 中單場比賽 Lineup 的資料結構。

Lineup 用於記錄主隊與客隊的先發、打序、守備位置及替補球員。

----------------------------------------

## Team Lineup

每隊 Lineup 包含：

- Team ID
- Starting Lineup
- Bench Players
- Current Lineup

----------------------------------------

## Starting Lineup

每位先發球員包含：

- Batting Order
- Player ID
- Player Name
- Defensive Position
- Is Designated Hitter
- Is Starting Player

----------------------------------------

## Bench Players

每位替補球員包含：

- Player ID
- Player Name
- Available Positions
- Status

----------------------------------------

## Current Lineup

記錄目前比賽中的：

- Batting Order
- Active Player
- Defensive Position
- Entry Sequence
- Exit Sequence
- Substitution History

----------------------------------------

## DH Rules

- 主隊與客隊分別記錄 DH 設定
- 主隊與客隊可獨立啟用或停用 DH
- 不得要求兩隊使用相同 DH 設定

----------------------------------------

## Player Status

包含：

- Starting
- Bench
- Active
- Substituted
- Removed

----------------------------------------

## Functional Requirements

- 支援主隊與客隊獨立 Lineup
- 支援設定打序
- 支援設定守備位置
- 支援設定替補球員
- 支援獨立 DH 設定
- 支援 Substitution Event 更新
- 保留完整換人歷程

----------------------------------------

## Out of Scope

- 球員生涯資料
- 球隊名冊管理
- 賽事報名管理
