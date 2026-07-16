# RBIS Core v1 Roles & Permissions

## System Admin（系統管理員）

負責整個平台。

權限：

- 使用者管理
- 角色管理
- 系統設定
- 建立聯盟
- 建立賽事
- 查看所有資料
- 刪除資料
- 備份

---

## League Admin（聯盟管理員）

負責管理聯盟及賽事。

權限：

- 建立球季
- 建立賽事
- 建立組別
- 建立賽程
- 管理所有球隊
- 查看所有報表

---

## Team Admin（球隊管理員）

負責球隊管理。

權限：

- 管理球員
- 建立比賽
- 建立先發名單
- 查看球隊資料
- 查看球隊報表
- 情蒐

---

## Coach（教練）

權限：

- 建立比賽
- 即時紀錄
- 修改紀錄
- Replay
- 情蒐
- AI分析
- 查看報表

---

## Recorder（紀錄員）

權限：

- 即時紀錄
- 修改Play
- Replay
- 查看報表

---

## Player（球員）

權限：

- 查看自己的資料
- 查看自己的成績
- 查看球隊比賽
- Replay

---

## Guest（訪客）

權限：

- 查看公開比賽
- 查看比分
- 查看公開報表

---

# Permission（權限）

系統不直接判斷 Role。

所有功能皆由 Permission 控制。

例如：

canManageUsers

canManageLeague

canManageTournament

canManageTeam

canManagePlayers

canCreateGame

canScoreGame

canEditGame

canReplay

canScout

canViewReport

canUseAI

canManageSystem