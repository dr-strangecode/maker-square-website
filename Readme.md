# Maker Square Play Place — website

A single-brand Astro 5 website for **Maker Square Play Place** in Johnson City, Tennessee.

The illustrated homepage, supporting pages, party-request and contact forms, neighborhood art, and existing facility photographs are retained from the original design branch. There is no alternate brand or runtime theme switch.

## Development

Requirements: Node.js 20+ and npm.

```bash
npm ci
cp .env.example .env
npm run dev
```

Astro runs at http://localhost:8080. Use `npm run build` before opening a pull request. The site is static and the build output is `dist/`.

## Cloudflare Pages

Connect this repository as a **separate Pages project**. Use:
- Framework: Astro
- Production branch: `master` (currently the repository default; update if you rename it)
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root
- Domain: `makersquareplayplace.com` (attach after DNS is ready)
- No brand-selection environment variable is needed.

Set `PUBLIC_WEB3FORMS_ACCESS_KEY` and `PUBLIC_SMARTWAIVER_URL` only when ready. Do not commit production secrets.

## Content and images

- The real photographs in `public/images/` (gallery, hero, party) are intentionally kept.
- Maker Square logo and illustrated neighborhood SVG are kept.
- Set `PUBLIC_MAKER_CONCEPT_ART=true` explicitly for an illustrative *design review* only. Default is off, including in production. The concept images are not actual venue photography.
- The business pin linked in Maps still refers to the existing historical Google Maps listing, pending its rebranding. It deliberately points to the rear mall location rather than searching the mall street address.
- Social-media links remain hidden until the official Maker Square account URLs are confirmed.
- Current hours, admission, party details, and waiver policies are carried forward as-is for a separate operational review.

## Forms and integrations

Contact and party requests use Web3Forms when `PUBLIC_WEB3FORMS_ACCESS_KEY` is set. Configure the key to deliver messages to `hello@makersquareplayplace.com`. Verify with a test submission after setup. Without a key, the forms show contact alternatives.

The waiver button uses `PUBLIC_SMARTWAIVER_URL` when provided. This site does not yet offer online ticketing, payments, membership checkout, live occupancy, or reservation availability.

## Branches and deployment safety

This repository is independent of the existing Little Bloom House website; neither its source code nor its Cloudflare project should be changed during this cleanup. Review and merge `refactor/maker-only-site` before deploying it to the new Pages project. Keep the legacy domain/redirect work separate until launch.

See `docs/maker-playtown-design.md` for the artwork and homepage implementation notes.
