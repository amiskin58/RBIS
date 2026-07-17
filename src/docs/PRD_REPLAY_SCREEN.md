# PRD - Replay Screen

## Purpose

Replay 提供比賽 Event 的完整回放與檢視功能。

所有內容皆由 Event 自動產生，不可直接修改。

----------------------------------------

## Components

### Game Information

顯示：

- 比賽日期
- 賽事名稱
- 主隊
- 客隊
- 最終比分

----------------------------------------

### Event Timeline

依時間順序顯示所有 Event。

每筆 Event 包含：

- 局數
- 上／下半局
- 打者
- 投手
- Event 類型
- Event 描述

----------------------------------------

### Replay Controls

包含：

- 上一筆
- 下一筆
- 播放
- 暫停
- 跳至指定 Event

----------------------------------------

## Navigation

Live Score
→ Replay

Replay
→ Box Score

----------------------------------------

## Functional Requirements

- 顯示完整 Event Timeline
- 支援逐筆瀏覽 Event
- 支援播放 Replay
- 支援跳至指定 Event
- Event 不可直接編輯

----------------------------------------

## Out of Scope

- 即時紀錄
- Event 修改
- 匯出