# RBIS Score User Flow

## 賽前（Pre Game）

登入
↓
選擇賽事
↓
選擇比賽
↓
建立比賽（如尚未建立）
↓
設定比賽規則
↓
建立先發名單
↓
開始比賽

----------------------------------------

## 比賽中（In Game）

Pitch
↓
Play
↓
Runner
↓
Substitution（如有）
↓
更新計分板
↓
下一球

持續循環直到比賽結束。

----------------------------------------

## 賽後（Post Game）

確認比賽結束
↓
產生 Box Score
↓
Replay
↓
匯出紀錄
↓
封存比賽

----------------------------------------

## 異常流程

紀錄錯誤
↓
Correction Event
↓
重新計算 GameState
↓
更新 Statistics
↓
更新 Replay

----------------------------------------

## 操作原則

所有操作皆以 Event 為核心。

不得直接修改：

- Score
- Statistics
- Replay

所有資料皆由 Event 自動計算。