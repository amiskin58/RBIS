# PRD - Substitution Workflow

## Purpose

定義比賽中球員替換（Substitution）的操作流程。

所有換人操作皆建立新的 Event。

----------------------------------------

## Workflow

比賽進行中
↓
選擇換人類型
↓
選擇退場球員
↓
選擇上場球員
↓
確認守備位置（如需要）
↓
建立 Substitution Event
↓
更新 Lineup
↓
更新 Defensive Alignment
↓
等待下一球

----------------------------------------

## Substitution Types

包含：

- Pinch Hitter
- Pinch Runner
- Defensive Replacement
- Pitching Change

----------------------------------------

## Functional Requirements

- 支援各種換人類型
- 支援指定退場球員
- 支援指定上場球員
- 支援更新守備位置
- 建立 Substitution Event
- 即時更新 Lineup
- 即時更新場上守備配置

----------------------------------------

## Out of Scope

- Replay
- Statistics
- 賽後管理
