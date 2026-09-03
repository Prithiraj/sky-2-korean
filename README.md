# The Sky 2 Korean Restaurant Tecom

A mobile-first, conversion-focused static website for **The Sky 2 Korean Restaurant Tecom** in Barsha Heights, Dubai.

Live site: <https://prithiraj.github.io/sky-2-korean/>

## What is implemented

- Evidence-backed restaurant details and conversion actions.
- Mobile-first responsive layout with persistent mobile Call / Directions controls.
- Semantic HTML, keyboard focus states, skip link and reduced-motion behavior.
- Responsive real photography sourced from Wikimedia Commons with Creative Commons attribution.
- Optional Three.js ember/heat enhancement over the hero. The photograph remains the primary visual and the page works if WebGL/JavaScript fails.
- Local SEO metadata, Open Graph metadata, `Restaurant` JSON-LD, sitemap and robots file.
- GitHub Pages compatible: no build step or framework is required.

## Content source notes

Core facts used in the build were checked in September 2026 against the Google Maps business listing / structured local result, Waze, Wanderlog and current third-party listings.

Current implementation uses:

- Address: Golden Tulip Media Hotel, 1st floor, Al Thanyah First, Barsha Heights, Dubai, UAE.
- Phone: +971 4 448 9818.
- Hours: daily 12:00–14:00 and 18:00–23:00.
- Google rating displayed at build time: 4.2 from 248 reviews.
- Instagram: `@skykoreanrestaurant`.

These operational details should be re-verified periodically because public listings can change.

## Photography

The deployed images are **real photographs**, not AI-generated imagery, but they are **illustrative Korean food photography and are not claimed to have been photographed at Sky 2**.

See [`docs/image-rights.md`](docs/image-rights.md) for exact sources and licenses. For a commercial owner launch, replace these with high-resolution restaurant-owned originals while keeping the same art direction and crops.

## Project documents

- [`docs/design-plan.md`](docs/design-plan.md) — research/evidence baseline and approved implementation plan.
- [`docs/image-rights.md`](docs/image-rights.md) — image licensing and replacement notes.

## Local preview

Because the site is static, any simple web server works:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.
