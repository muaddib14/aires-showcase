# Aires - AI Research SKILLs Catalog

A production catalog showcasing 98 AI research skills across 23 categories. Built on the open-source [AI-Research-SKILLs](https://github.com/Demerzels-lab/Aires-Research-Agent) library.

## What is this?

Aires is a Next.js website that helps developers and researchers discover, browse, and install AI research skills (SKILL.md files) for use with Claude Code, Codex, Gemini CLI, Cursor, or Claude chat.

Two installation paths are supported:
- **Path A (CLI)**: `npx ai-research-skills install <skill>` — for developers and coding agents
- **Path B (Upload)**: Download SKILL.md from GitHub, upload to claude.ai/customize/skills — for Claude chat users

## Tech Stack

- **Framework**: Next.js 14.2 (App Router, static pre-rendering)
- **Styling**: Tailwind CSS + inline styles
- **Animation**: Framer Motion
- **License**: MIT

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the site.

## Build

```bash
npm run build
```

## Project Structure

- `app/` — Next.js App Router pages (`/`, `/docs`, `/skill/[slug]`)
- `components/` — React components (Hero, SkillGrid, SkillDetail, DocsContent, etc.)
- `lib/` — Skill data, categories, and utility functions
- `public/` — Static assets (logo, images)

## Skill Data

Skills and categories are defined in `lib/skills.ts` and `lib/categories.ts`, auto-generated from the upstream [AI-Research-SKILLs](https://github.com/Demerzels-lab/Aires-Research-Agent) repository.

## License

MIT — see the upstream [AI-Research-SKILLs](https://github.com/Demerzels-lab/Aires-Research-Agent) repository for skill licensing.
