# 🚀 SpaceX Mission Intelligence

> Real-time SpaceX launch data — powered by an AI sidebar that answers anything about any mission.

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript_6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CopilotKit](https://img.shields.io/badge/CopilotKit-6366f1?style=for-the-badge&logo=anthropic&logoColor=white)

## What it does

Browse every SpaceX launch — and ask the AI sidebar anything about it in plain language.

- 🛸 **Live launch data** via SpaceX public API (30 latest missions)
- 🤖 **AI Mission Briefings** — CopilotKit sidebar with full mission context
- 📺 **Launch videos** — embedded YouTube player per mission
- ⚡ **Turbopack** dev server, React 19, Tailwind 4

## Stack

| | |
|--|--|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 6 |
| AI | CopilotKit 1.54 + Anthropic Claude |
| Styling | Tailwind CSS 4 (CSS-native, no config file) |
| Runtime | Bun |

## Getting Started

```bash
git clone https://github.com/Xorpio89/SpaceX_Example_App_GraphQL
cd SpaceX_Example_App_GraphQL
bun install
cp .env.example .env.local  # Add ANTHROPIC_API_KEY
bun dev
```

## Project Structure

```
app/
├── layout.tsx              # CopilotKit provider + dark header
├── page.tsx                # Launch list (Server Component)
├── globals.css             # Tailwind 4 @theme tokens
├── launch/[id]/page.tsx    # Mission detail + AI context
└── api/copilotkit/route.ts # Claude API endpoint
lib/
└── spacex.ts               # SpaceX REST API helpers
```

## AI Sidebar

The sidebar uses `useCopilotReadable` to inject the current mission's data — so when you ask *"Why did this mission fail?"* the AI already knows which launch you're looking at.

```ts
useCopilotReadable({
  description: 'Current SpaceX mission details',
  value: { mission, flightNumber, rocket, year, success, details },
})
```

## Original Version

The original 2018 React + Express + GraphQL version is preserved on the [`legacy`](../../tree/legacy) branch.

---

Built as a portfolio modernization — original 2018 project rebuilt with 2025 stack.
