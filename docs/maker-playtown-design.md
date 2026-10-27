# Maker Square illustrated playtown website

## Scope

This is the standalone **Maker Square Play Place** Astro site. It has one brand, one configuration, and no runtime skin switch. The previously approved signpost homepage is built with real HTML text and links, an original SVG illustration system, and the Maker Square logo. Existing contact and party inquiry forms and older facility photographs are preserved.

## Photography and previews

Production and default previews use the retained, real facility photos in `public/images/`. For a visual design review only, set `PUBLIC_MAKER_CONCEPT_ART=true` to show the low-resolution illustrative photos from the approved concept image. The concept photos are **not** pictures of the actual play place; the site displays a notice in that mode. No third-party play-center imagery or artwork is used.

The historic Google Maps URL still references the former business listing because that is the pin being used to guide families to the rear of the mall. Keep this until the listing is rebranded and directions have been verified.

## Structure

- `src/components/maker/home.html`: homepage sections, editable text, and links.
- `src/components/maker/header.html`: responsive illustrated navigation.
- `src/components/maker/Home.astro`: image-mode selection and HTML assembly.
- `src/config/site.ts`: single Maker Square configuration, including address and directions.
- `src/components/LocationAddress.astro`: linked location and entrance information.
- `public/images/maker/playtown.svg`: illustrated vectors, houses, road, garden, and icons.
- `src/styles/global.css`: shared informational page and form layout.
- `src/styles/playtown.css` and `playtown-responsive.css`: Maker Square presentation.
- `public/js/playtown.js`: mobile navigation and progressive scroll reveals.

## Accessibility and testing

Interactive elements remain real links/buttons. The mobile menu handles keyboard navigation and escape-to-close. Motion respects reduced-motion preferences, and page content remains visible when JavaScript is unavailable.

Earlier design work included a local Chromium HTML-harness check at 1440, 1122, 768, 390, and 360 pixels, but that **does not establish that this standalone Astro application builds or renders correctly**. Before merging this refactor, run `npm ci && npm run build` and inspect the new Pages preview at desktop and mobile widths. Validate the submitted form destination before launch.

## Pending content decisions

Prices, party details, hours, capacity, phone number, and operating policies were transferred unchanged. Verify them in a separate content review. Official Maker Square social account URLs are intentionally blank until supplied. The new domain is `https://makersquareplayplace.com` and the website contact email is `hello@makersquareplayplace.com`.
