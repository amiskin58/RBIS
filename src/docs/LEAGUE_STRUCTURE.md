# RBIS Core v1 League Structure

## 系統資料關係

League
│
├── Season
│     │
│     ├── Tournament
│     │      │
│     │      ├── Division
│     │      │      │
│     │      │      ├── Team
│     │      │      │      │
│     │      │      │      ├── Player
│     │      │      │
│     │      │      └── Schedule
│     │      │
│     │      └── Games
│     │
│     └── Statistics
│
└── History

--------------------------------------------

League

例如：

中華棒協

社會聯盟

企業聯盟

--------------------------------------------

Season

例如：

2025

2026

2027

--------------------------------------------

Tournament

例如：

女子棒球聯賽

協會盃

總統盃

亞洲盃資格賽

--------------------------------------------

Division

例如：

公開組

社會組

大專組

高中組

--------------------------------------------

Game

每一場正式比賽。

Game 為唯一紀錄單位。

所有 Event 皆屬於 Game。

--------------------------------------------

Event

每一球

每一次 Play

每一次換人

都是 Event。

--------------------------------------------

原則

League 可以有很多 Season。

Season 可以有很多 Tournament。

Tournament 可以有很多 Division。

Division 可以有很多 Team。

Team 可以參加很多 Tournament。

Game 必須隸屬於一個 Tournament。

Event 必須隸屬於一場 Game。