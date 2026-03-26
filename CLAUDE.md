# Magical Agency — Restaurant Website Lead Magnet

## What This Is
A high-conversion lead magnet website for a restaurant web design agency. Restaurant owners answer 4 culinary-themed questions, AI generates a custom homepage draft in ~30 seconds, and they're prompted to book a free call to finish the site.

## The Sales Funnel
1. **Landing page** (`/`) — hooks with "Your restaurant deserves a website as good as your food"
2. **Chef's Intake** (`/intake`) — 4-step progressive form, one question at a time to prevent overwhelm
3. **Generating screen** — animated "cooking" metaphor builds anticipation
4. **Preview page** (`/preview/[id]`) — shareable URL showing AI-generated site draft
5. **Booking overlay** — slides in after 3s: "It's 80% cooked. Book a 15-min call to launch it."

## Tech Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — Todoist-inspired minimal aesthetic (#E44332 primary red)
- **Framer Motion** — slide-up transitions between form steps
- **Lucide React** — icons
- **Gemini 2.0 Flash** — generates website copy, color palette, section structure
- **Upstash Redis** — persists generated briefs so preview URLs are shareable (30-day TTL)
- **Zod** — validates form input and Gemini output

## Key Files
- `src/app/page.tsx` — Landing page
- `src/app/intake/page.tsx` → `src/components/intake/IntakeShell.tsx` — Form orchestrator
- `src/hooks/useIntakeForm.ts` — Form state, validation, step navigation
- `src/app/api/generate-brief/route.ts` — Gemini API route, saves to Redis
- `src/app/preview/[id]/page.tsx` — Server component fetching from Redis
- `src/app/preview/[id]/PreviewClient.tsx` — Client-side preview rendering
- `src/lib/gemini.ts` — Gemini SDK init + prompt engineering
- `src/lib/redis.ts` — Upstash Redis helpers with in-memory fallback for local dev
- `src/lib/constants.ts` — Vibe options, generating screen messages

## Environment Variables
```
GEMINI_API_KEY=           # Google Gemini API key
UPSTASH_REDIS_REST_URL=   # Upstash Redis URL (auto-set via Vercel integration)
UPSTASH_REDIS_REST_TOKEN= # Upstash Redis token
```

## Development
```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build
npm run lint   # ESLint
```

## Deployment
1. Push to GitHub
2. Import in Vercel (auto-detects Next.js)
3. Add `GEMINI_API_KEY` env var
4. Add Upstash Redis integration from Vercel Marketplace (auto-sets Redis env vars)
5. Deploy

## UX Copy Rules
- No tech-speak. "Next Step" not "Submit". "Generate My Site" not "Process".
- Culinary metaphors throughout: appetizer, flavor, signature dish, plating, garnishing
- Trust signals at every step: "No spam", "No payment needed", "Takes 30 seconds"
- Booking overlay copy: warm, no-pressure, "15 minutes. That's all it takes."
