# RBIS Core v1 Game Lifecycle

## 一場比賽的生命週期

League
↓
Season
↓
Tournament
↓
Division
↓
Game
↓
Finalize
↓
Archive

----------------------------------------

## 建立比賽(Create Game)

建立：

- 日期
- 時間
- 球場
- 主隊
- 客隊
- 賽事
- 組別
- 局數
- DH
- Mercy Rule
- Tie Break
- 紀錄員
- 主審
- 備註

----------------------------------------

## 建立先發(Lineup)

主隊：

- 先發九人
- 打序
- 守位
- 替補

客隊：

- 先發九人
- 打序
- 守位
- 替補

----------------------------------------

## 比賽開始(Start Game)

開始建立 Event。

GameState 由 Event 即時計算。

----------------------------------------

## 比賽中(In Progress)

持續新增：

Pitch Event

Play Event

Runner Event

Substitution Event

Timeout Event

----------------------------------------

## 比賽結束(Final)

GameState 鎖定。

不得再直接修改比分。

若需修改：

新增 Correction Event。

----------------------------------------

## 報表

由 Event 自動產生：

- Box Score
- 打擊成績
- 投球成績
- 守備成績
- 跑壘成績

----------------------------------------

## Replay

Replay 只讀取 Event。

----------------------------------------

## Scout

Scout 只分析 Event。

----------------------------------------

## Archive

比賽永久保存。

任何歷史資料不得刪除。

如需修正，

新增 Correction Event 保留歷史。