# RBIS Core v1 Architecture

## 系統定位

RBIS（Reserve Baseball Information System）

一套以棒球 Event 為核心的：

- 賽事管理
- 即時紀錄
- 球隊管理
- 情蒐分析
- 報表分析

平台。

---

# 系統核心

League
↓
Tournament
↓
Division
↓
Team
↓
Player
↓
Game
↓
Event

所有資料皆由 Event 延伸。

Replay、Undo、Scout、Report
皆不得直接修改 GameState。

---

# 開發原則

1. Engine 不知道 React。

2. Workflow 不知道資料庫。

3. UI 不直接修改 GameState。

4. 所有事件皆產生 Event。

5. GameState 由 Event 計算而來。

---

# 模組

Authentication

Permission

League

Tournament

Division

Team

Player

Game

Workflow

Engine

Statistics

Replay

Scout

Report

Database

---

# Engine

PitchEngine

HitEngine

RunnerEngine

GameEngine

StatisticsEngine

---

# Workflow

Pitch Workflow

Play Workflow

Substitution Workflow

---

# Repository

GameRepository

PlayerRepository

TeamRepository

EventRepository