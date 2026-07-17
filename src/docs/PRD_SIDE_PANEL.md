# PRD - Side Panel

## Purpose

Side Panel 提供比賽中的輔助資訊顯示。

所有資料皆由 Event 自動更新。

----------------------------------------

## Components

### Batter Information

顯示：

- 打者姓名
- 打序
- 守備位置

----------------------------------------

### Pitcher Information

顯示：

- 投手姓名
- 投球數
- 已投局數

----------------------------------------

### Event History

依時間倒序顯示 Event。

每筆 Event 包含：

- 局數
- 打者
- Event 類型
- Event 描述

----------------------------------------

### Quick Status

顯示：

- 出局數
- 壘上跑者
- 攻守隊伍

----------------------------------------

## Functional Requirements

- 即時更新打者資訊
- 即時更新投手資訊
- 即時更新 Event History
- 最新 Event 顯示於最上方
- 支援捲動檢視歷史紀錄

----------------------------------------

## Out of Scope

- Event 編輯
- Replay
- Statistics
