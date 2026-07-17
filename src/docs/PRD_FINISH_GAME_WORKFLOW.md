# PRD - Finish Game Workflow

## Purpose

定義比賽結束（Finish Game）的操作流程。

比賽結束後，系統將停止即時紀錄並產生所有賽後資料。

----------------------------------------

## Workflow

符合比賽結束條件
↓
確認結束比賽
↓
建立 Finish Game Event
↓
鎖定比賽紀錄
↓
重新計算所有 Statistics
↓
產生 Box Score
↓
產生 Replay
↓
進入 Box Score

----------------------------------------

## Finish Conditions

包含：

- 正常局數結束
- 提前結束（Mercy Rule）
- 裁定比賽
- 手動結束比賽

----------------------------------------

## Functional Requirements

- 建立 Finish Game Event
- 鎖定比賽紀錄
- 自動重新計算所有統計
- 自動產生 Replay
- 自動產生 Box Score
- 禁止繼續新增比賽 Event

----------------------------------------

## Out of Scope

- 匯出資料
- 賽季統計
- 聯盟管理
