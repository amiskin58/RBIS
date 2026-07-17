# PRD - Statistics Update

## Purpose

定義 Statistics 的更新流程。

所有統計資料皆由 Event 自動計算產生，不可直接修改。

----------------------------------------

## Update Flow

Event 已套用
↓
更新 GameState
↓
重新計算 Statistics
↓
更新 UI
↓
等待下一個 Event

----------------------------------------

## Statistics Scope

包含：

### Team Statistics

- R
- H
- E

----------------------------------------

### Batting Statistics

- PA
- AB
- H
- 2B
- 3B
- HR
- RBI
- R
- BB
- SO
- HBP
- SF
- SH

----------------------------------------

### Pitching Statistics

- IP
- Pitch Count
- H
- R
- ER
- BB
- SO
- HBP

----------------------------------------

### Fielding Statistics

- TC
- PO
- A
- E
- DP

----------------------------------------

## Update Rules

- 所有統計皆由 Event 推導
- 不得直接修改 Statistics
- 每次 Event 完成後立即重新計算

----------------------------------------

## Functional Requirements

- 即時更新所有統計
- 保持資料一致性
- 支援 Replay 重新計算
- 支援 Correction Event 重新計算

----------------------------------------

## Out of Scope

- 賽季統計
- 聯盟統計
- AI 分析
