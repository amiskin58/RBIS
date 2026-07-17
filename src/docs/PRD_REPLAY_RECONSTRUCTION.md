# PRD - Replay Reconstruction

## Purpose

定義系統如何依照 Event 重新建構比賽狀態。

Replay 不使用已儲存的 GameState，而是依 Event 順序重新推導。

----------------------------------------

## Reconstruction Flow

讀取比賽 Event
↓
依時間順序排序
↓
建立初始 GameState
↓
逐筆套用 Event
↓
產生各 Event 對應的 GameState Snapshot
↓
提供 Replay 使用

----------------------------------------

## Replay Data

每個 Replay Step 包含：

- Event
- Event Sequence
- GameState Before
- GameState After
- Inning
- Half Inning
- Score
- Count
- Bases
- Batter
- Pitcher

----------------------------------------

## Reconstruction Rules

- Event 為唯一資料來源
- 必須依 Event Sequence 順序套用
- 不得直接使用目前 GameState 取代重建
- Correction Event 必須納入重建
- 無效或已撤銷 Event 不得套用

----------------------------------------

## Functional Requirements

- 可由初始狀態重建完整比賽
- 可產生每筆 Event 的 GameState
- 支援上一筆與下一筆 Replay
- 支援跳至指定 Event
- 重建結果須與正式比賽結果一致

----------------------------------------

## Out of Scope

- Replay 動畫效果
- 影片回放
- Heat Map
- Scout 分析
