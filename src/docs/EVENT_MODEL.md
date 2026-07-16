# RBIS Core v1 Event Model

## 設計理念

RBIS 採用 Event Sourcing。

所有比賽資料皆由 Event 組成。

GameState 不直接修改。

所有統計皆由 Event 計算。

----------------------------------------

## Event

每一筆 Event 都代表一件已發生的事情。

例如：

Pitch

Hit

Walk

Strikeout

Runner Advance

Substitution

Timeout

----------------------------------------

## Event 類型

Pitch Event

Play Event

Runner Event

Fielding Event

Substitution Event

Game Event

----------------------------------------

## Pitch Event

紀錄：

- Ball
- Called Strike
- Swing Strike
- Foul
- Hit By Pitch
- Balk
- Wild Pitch
- Passed Ball

----------------------------------------

## Play Event

紀錄：

- 1B
- 2B
- 3B
- HR
- BB
- Error
- Fielder Choice
- Double Play
- Triple Play
- Sac Fly
- Sac Bunt

----------------------------------------

## Runner Event

紀錄：

- Advance
- Steal
- Caught Stealing
- Pick Off
- Score

----------------------------------------

## Fielding Event

紀錄：

- 第一處理守備員
- 傳球路徑
- Assist
- Put Out
- Error

----------------------------------------

## Substitution Event

紀錄：

- 換投
- 換守
- 代打
- 代跑

----------------------------------------

## Game Event

紀錄：

- 比賽開始
- 半局開始
- 半局結束
- 比賽結束
- 暫停
- 恢復
- 雨天裁定

----------------------------------------

## 原則

所有 Event：

不得修改。

若紀錄錯誤：

新增 Correction Event。

Replay

Scout

Statistics

Report

全部由 Event 計算。