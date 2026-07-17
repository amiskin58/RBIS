# PRD - RBIS Score MVP

## Purpose

定義 RBIS Score 第一個可正式投入使用（MVP）的功能範圍。

MVP 目標為完成一場比賽的完整紀錄、回放及統計。

----------------------------------------

## MVP Scope

### Game Setup

- 建立比賽
- 設定比賽規則
- 設定主隊
- 設定客隊
- 設定先發名單

----------------------------------------

### Live Score

支援：

- Pitch
- Play
- Runner
- Substitution
- Finish Game

----------------------------------------

### Event

支援：

- Event 建立
- Event Validation
- Event Store
- Event Replay
- Correction Event

----------------------------------------

### Game Engine

支援：

- GameState 更新
- 比數更新
- 壘包更新
- 局數更新
- 攻守轉換
- 比賽結束判定

----------------------------------------

### Statistics

支援：

- Team Statistics
- Batting Statistics
- Pitching Statistics
- Fielding Statistics

----------------------------------------

### Reports

支援：

- Replay
- Box Score
- JSON Export
- CSV Export

----------------------------------------

## MVP Success Criteria

完成以下項目即可視為 MVP：

- 可完成一場完整比賽紀錄
- 可重建整場比賽
- 可產生完整 Box Score
- 可產生完整 Statistics
- 可修正 Event
- 可匯出比賽資料

----------------------------------------

## Out of Scope

- League Management
- Tournament Management
- Scout
- AI Analysis
- Cloud Sync
- Multi-user Collaboration
