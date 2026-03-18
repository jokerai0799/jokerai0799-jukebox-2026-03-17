# Neonix Handoff

## Project location
- Local path: `/root/.openclaw/workspace/projects/neonix`
- Current purpose: marketing site / landing pages for the Neonix Discord music bot

## Current live assumptions
- Current public domain in code: `https://jukeboxbot.online`
- This was left unchanged during the Neonix rebrand so the existing deployed site does not break before a new domain is chosen.
- When a new Neonix domain is ready, update these files together:
  - `app/layout.tsx`
  - `app/robots.ts`
  - `app/sitemap.ts`

## Validation workflow
Run these before handoff:

```bash
cd /root/.openclaw/workspace/projects/neonix
npm run verify
```

## Brand source of truth
- Product name in copy: `Neonix`
- Invite CTA uses the current Discord bot invite URL already wired in the app files
- Support CTA uses Stripe

## Handoff checklist
1. Confirm branding changes are reflected in `app/` pages and metadata.
2. Build the site successfully.
3. If the domain changes, update metadata + sitemap + robots together.
4. If the Vercel project is renamed externally, align `.vercel/project.json` after the platform-side rename.
