# Maker Square illustrated homepage

## Scope
Rebuild of the approved signpost homepage on `design/maker-square-playtown-v2`. Uses real HTML links and text, original SVG icons and scenery, and the existing logo. The website is not a full-screen screenshot with hotspots. The default LBH brand remains separate. Existing party/contact forms and operational content are unchanged. No payment, membership billing, live occupancy, or booking backend is introduced.

## Preview
Keep `PUBLIC_BRAND=maker` in the Cloudflare preview environment. Concept photography is automatically enabled only when `CF_PAGES_BRANCH` is `design/maker-square-playtown-v2`. `PUBLIC_MAKER_CONCEPT_ART=true` explicitly enables it elsewhere; `false` always disables it. Production/default builds use the existing real facility photo paths. Concept mode includes a visible notice and image accessibility labels.

The four `concept-*.txt` source chunks concatenate into one base64 WebP atlas of small photo crops from the owner-approved generated mockup. They are embedded once, only in concept mode. They are low-resolution review placeholders, not publication-ready photography. Replace with good real photographs before launch. No Peek N Play photographs or artwork are used.

## Structure
- `src/components/maker/home.html`: editable homepage content and links.
- `src/components/maker/header.html`: responsive icon navigation.
- `src/components/maker/Home.astro`: image-mode selection and HTML assembly.
- `public/images/maker/playtown.svg`: coordinated vector icons, gardens, road and houses.
- `src/styles/playtown.css` and `playtown-responsive.css`: brand-scoped desktop and responsive styling.
- `public/js/playtown.js`: mobile-menu behavior and progressive scroll reveals.

All content is visible without JavaScript. Motion is disabled for reduced-motion preferences. Links have visible keyboard focus; Escape closes the mobile menu and restores focus. The new About page supplies the Our Story destination. Primary CTAs say Plan rather than pretending instant online booking exists.

## Validation performed
Local Chromium rendering of the same homepage/header HTML partials, styles and JavaScript at 1440, 1122, 768, 390 and 360 px. No horizontal document overflow or JavaScript errors in that harness. Scroll reveal, mobile open/close, Escape/focus restoration, reduced-motion and JavaScript-disabled navigation checks passed.

The local harness inlined SVG resources and used installed font fallbacks because network access was blocked. It is not a complete Astro build or hosted Cloudflare test. An Astro production build, exact production fonts, external sprite loading, real-photo mode and existing form submissions still require Cloudflare/browser validation. No forms were submitted during testing.
