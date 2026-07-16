# RBIS Core v1 Module Relationship

## 系統架構

User
│
└── Role
      │
      ├── Permission
      │
      ▼
League
│
▼
Season
│
▼
Tournament
│
▼
Division
│
▼
Team
│
▼
Player
│
▼
Game
│
▼
Event
│
├── Pitch Event
├── Play Event
├── Runner Event
└── Substitution Event

────────────────────────────

Event
│
├── GameState
├── Statistics
├── Replay
├── Scout
└── Report

────────────────────────────

Game
│
├── Home Team
├── Away Team
├── Lineup
├── Umpire
├── Recorder
└── Settings

────────────────────────────

Team
│
├── Players
├── Coaches
└── Seasons

────────────────────────────

Player
│
├── Profile
├── Career
├── Statistics
└── Scout

────────────────────────────

Workflow

Pitch Workflow

Play Workflow

Runner Workflow

Substitution Workflow

────────────────────────────

Engine

PitchEngine

HitEngine

RunnerEngine

GameEngine

StatisticsEngine

────────────────────────────

Repository

UserRepository

LeagueRepository

TournamentRepository

TeamRepository

PlayerRepository

GameRepository

EventRepository