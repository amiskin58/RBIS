# PRD - Game Rules Schema

## Purpose

定義 RBIS Score 中單場比賽規則的資料結構。

Game Rules 於建立比賽時設定，並作為比賽流程與 Event Validation 的判定依據。

----------------------------------------

## Game Rules

包含：

- Total Innings
- Home DH
- Away DH
- Mercy Rule
- Tie Break
- Extra Innings
- Time Limit

----------------------------------------

## Total Innings

支援：

- 5 Innings
- 7 Innings
- 9 Innings

----------------------------------------

## DH Settings

分別記錄：

- Home DH Enabled
- Away DH Enabled

主隊與客隊可獨立設定。

----------------------------------------

## Mercy Rule

包含：

- Enabled
- Run Difference
- Effective Inning

例如：

- 五局相差十分提前結束

----------------------------------------

## Tie Break

包含：

- Enabled
- Start Inning
- Runner Placement

例如：

- 延長賽自二壘配置跑者

----------------------------------------

## Extra Innings

包含：

- Enabled
- Maximum Extra Innings

----------------------------------------

## Time Limit

包含：

- Enabled
- Duration Minutes
- New Inning Restriction

----------------------------------------

## Functional Requirements

- 支援 5、7、9 局設定
- 支援主客隊獨立 DH
- 支援 Mercy Rule
- 支援 Tie Break
- 支援延長賽設定
- 支援時間限制
- 所有規則可供 Event Validation 使用
- 所有規則可供 Finish Game 判定使用

----------------------------------------

## Out of Scope

- 聯盟共用規則管理
- 賽事規章範本
- 規則版本管理
