# RBIS Product Decisions

本文件紀錄 RBIS 所有重大產品決策。

每項決策一經 Accepted，除非提出新的 Decision，不得任意修改。

---

## Decision-001

日期：

2026-07

標題：

RBIS 採用 Platform 架構

內容：

RBIS 分為：

- RBIS Score
- RBIS Manager
- RBIS Scout

三個產品共用同一套資料。

狀態：

Accepted

---

## Decision-002

日期：

2026-07

標題：

Event 為唯一資料來源

內容：

所有比賽紀錄皆以 Event 為核心。

Replay、Statistics、Scout、Report
皆由 Event 計算。

不得直接修改 GameState。

狀態：

Accepted

---

## Decision-003

日期：

2026-07

標題：

Tournament 球員登錄規則

內容：

同一位球員於同一 Tournament 中，

只能登錄一支球隊。

不同 Tournament 可代表不同球隊。

狀態：

Accepted

---

## Decision-004

日期：

2026-07

標題：

DH 規則

內容：

主隊與客隊可各自設定：

- 使用 DH
- 不使用 DH

系統不得限制兩隊採用相同制度。

狀態：

Accepted

---

## Decision-005

日期：

2026-07

標題：

產品開發流程

內容：

所有新功能皆依照：

需求
↓

PRD
↓

UI
↓

Engine
↓

Code

不得直接開始撰寫程式。

狀態：

Accepted

---

## Decision-006

日期：

2026-07

標題：

新功能管理

內容：

所有新想法不得直接加入目前版本。

必須先加入 Product Backlog。

待目前版本完成後，再評估是否納入下一版本。

狀態：

Accepted