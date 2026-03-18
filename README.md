# Neonix landing page

Retro-styled Next.js landing page for the Neonix Discord music bot.

## Stack
- Next.js 16
- React 19
- Tailwind CSS 4

## Local development
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run lint
npm run build
```

## Deployment
Target platform: Vercel

Recommended settings:
- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output setting: default Next.js output

## Notes
- The public bot invite is wired directly into the site CTA buttons.
- The support link points to Stripe.
- No required environment variables are currently needed for deployment.
- The site is a static/standard marketing page with no backend dependencies.
- Current public domain references still point at `jukeboxbot.online` temporarily until a Neonix domain is chosen.
- See `HANDOFF.md` for rename-sensitive paths and validation steps.
