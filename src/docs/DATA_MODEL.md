# RBIS Core v1 Data Model

## User（使用者）

系統登入帳號。

---

## Role（角色）

定義使用者權限。

例如：

- System Admin
- League Admin
- Team Admin
- Coach
- Recorder
- Player
- Guest

---

## League（聯盟）

例如：

- 中華棒協
- 社會聯盟

---

## Tournament（賽事）

例如：

- 2026女子棒球聯賽
- 2026協會盃

---

## Division（組別）

例如：

- 公開組
- 社會組
- 大專組
- 高中組

---

## Team（球隊）

例如：

- 跑跑人
- 向日葵

---

## Player（球員）

球員基本資料。

---

## Season（球季）

例如：

- 2025
- 2026

球員、球隊、賽事皆可對應不同球季。

---

## Game（比賽）

一場正式比賽。

---

## Event（事件）

系統最核心資料。

所有紀錄皆由 Event 組成。

---

## Scout（情蒐）

儲存分析結果。

---

## Report（報表）

由 Event 統計產生。