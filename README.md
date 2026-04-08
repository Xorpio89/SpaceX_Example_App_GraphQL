# 🚀 SpaceX Mission Intelligence

> Real-time SpaceX launch data — powered by GraphQL and AI mission briefings.

![SpaceX](https://img.shields.io/badge/SpaceX-000000?style=for-the-badge&logo=spacex&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

## What it does

Browse every SpaceX launch from Falcon 1 to Starship — and ask an AI for a mission briefing on any of them.

- 🛸 **Live launch data** via SpaceX public GraphQL API
- 🤖 **AI Mission Briefings** — ask anything about a launch, get a full debrief
- 📊 **Launch success/failure timeline** with rocket details
- ⚡ **App Router** + Server Components for instant data loading

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Data | GraphQL (Apollo Client) + SpaceX API v3 |
| AI | Claude API (mission briefings) |
| Styling | Tailwind CSS |
| Deploy | Vercel |

## Getting Started

```bash
git clone https://github.com/Xorpio89/SpaceX_Example_App_GraphQL
cd SpaceX_Example_App_GraphQL
npm install
cp .env.example .env.local  # Add ANTHROPIC_API_KEY
npm run dev
```

## Architecture

```
app/
├── page.tsx              # Launch list with live GraphQL data
├── launch/[id]/page.tsx  # Mission detail + AI briefing
├── api/
│   └── briefing/route.ts # Claude API — mission intelligence endpoint
lib/
├── graphql/
│   ├── client.ts         # Apollo Client setup
│   └── queries.ts        # Launch + Rocket queries
└── types.ts
```

## AI Briefing Example

```
User: "Tell me about the CRS-20 mission"

AI: Dragon CRS-20 launched March 7, 2020 on a Falcon 9 Block 5 from Cape
    Canaveral. It delivered 1,977 kg of cargo to the ISS including the
    Bartolomeo external platform. First time a Dragon capsule completed
    its fifth flight — a milestone for reusability...
```

## Original Version

The original React + Express + GraphQL version is on the [`legacy`](https://github.com/Xorpio89/SpaceX_Example_App_GraphQL/tree/legacy) branch.

---

Built as a modernization showcase — original project from 2018, rebuilt with 2024 stack.
