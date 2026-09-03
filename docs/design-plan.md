# Website Design Plan — The Sky 2 Korean Restaurant Tecom

**Implementation status:** approved and implemented from this document.

## 1. Evidence baseline

The business is **The Sky 2 Korean Restaurant Tecom**, categorized by the current Google local listing as a Korean barbecue restaurant / Korean restaurant.

Evidence-backed operating details used in the implementation:

- **Address:** Golden Tulip Media Hotel, 1st floor, Al Thanyah First, Barsha Heights, Dubai, UAE.
- **Restaurant phone:** +971 4 448 9818.
- **Current listed hours:** daily 12:00–14:00 and 18:00–23:00.
- **Google rating at research time (September 2026):** 4.2 / 5 from 248 reviews.
- **Experience:** tabletop Korean BBQ; public reviews describe both self-grilling at the table and kitchen-prepared BBQ.
- **Recurring food themes:** Korean BBQ, banchan, kimchi soup, mussel soup, bibimbap, octopus/share dishes and larger hotpots.
- **Korean drinks:** public listings/reviews mention soju and makgeolli.
- **Instagram:** `@skykoreanrestaurant` is repeatedly associated with the restaurant.

Primary public references:

- Google Maps place: `place_id: ChIJuZX0dXdrXz4RMvvxz070asM`
- Waze listing: <https://www.waze.com/en-AU/live-map/directions?from=place.ChIJuZX0dXdrXz4RMvvxz070asM>
- Wanderlog restaurant listing: <https://wanderlog.com/place/details/4642836/the-sky-2-korean-restaurant-tecom>
- Golden Tulip Media Hotel: <https://media-hotel.goldentulip.com/en-us/>

There are conflicting details on other directories (especially hotel phone/hours and historical prices). The website therefore does **not** invent or publish buffet offers, fixed prices or unsupported service claims.

## 2. Audience

Primary audience:

- Dubai residents and Korean-food enthusiasts around Barsha Heights, Dubai Internet City, Media City and Al Barsha.
- Groups looking for a shared Korean BBQ dinner.
- Visitors deciding from mobile search who need to answer: what is it, where is it, is it open, and how do I reserve?

Secondary audience:

- Korean residents/visitors looking for familiar dishes.
- Golden Tulip Media Hotel guests.
- Tourists searching for Korean BBQ in Dubai / Tecom.

## 3. Conversion goals

Primary actions:

1. **Call to reserve** — `tel:+97144489818`.
2. **Get directions** — Google Maps place link.

Secondary actions:

- Understand the menu/experience before calling.
- Browse the visual atmosphere.
- Open Instagram.

No WhatsApp, online booking, delivery service, promotions or pricing are invented.

## 4. Creative direction

### Concept: Seoul Grill After Dark

Warm, tactile and editorial rather than hotel-corporate or neon K-pop. The grill and the shared table are the visual story.

Personality:

**Warm · intimate · confident · traditional · cinematic · unpretentious**

Avoid:

- neon K-pop clichés,
- faux-Asian display fonts,
- generic hotel-gold luxury,
- game-like motion,
- AI-generated food.

## 5. Color system

Proposed UI palette (not claimed as official business brand colors):

| Token | Value | Role |
|---|---|---|
| Hanji | `#F2EBDD` | warm page surface |
| Rice | `#FFFDF8` | light contrast surface |
| Ink | `#171513` | primary dark |
| Charcoal | `#292622` | cards / nav |
| Ember | `#A63D2F` | conversion / heat accent |
| Brass | `#A17A4D` | visit section / detail |
| Leaf | `#435244` | optional secondary accent |

## 6. Typography

- **Display:** Noto Serif KR.
- **Body/UI:** Noto Sans KR.

Both support Korean and Latin scripts well, avoid cultural caricature, and give the design an editorial texture.

## 7. Image strategy

The deployed implementation uses **real, non-AI Creative Commons food photography** while restaurant-owned originals are pending.

Important: the current Commons images are intentionally labelled as illustrative and are not claimed as photographs of Sky 2. Full licensing is documented in [`image-rights.md`](image-rights.md).

Production replacement priority:

1. active tabletop grill,
2. full banchan spread,
3. signature BBQ,
4. soup/stew,
5. rice dish,
6. dining room,
7. entrance/signage,
8. owner/team,
9. group/private table,
10. Korean drinks if promoted.

Actual third-party/reviewer Sky 2 imagery is **not copied into production** unless permission is obtained.

## 8. Information architecture

```text
Header
├─ Experience
├─ Menu
├─ Gallery
├─ Visit
└─ Call to reserve

Hero
Quick proof strip
Korean BBQ experience
Menu / what to expect
Real-place story
Differentiators
Gallery
Visit / hours / contact
Closing CTA
Footer / photo credits
```

The structure prioritizes mobile decision-making rather than a long generic About page.

## 9. Section-by-section layout

### Header

- Transparent over hero, then warm opaque surface on scroll.
- Desktop nav: Experience / Menu / Gallery / Visit / Call to reserve.
- Mobile menu plus persistent bottom Call / Directions controls.

### Hero

- Large real Korean BBQ photograph.
- Copy: "Dinner tastes better around the grill."
- Evidence-backed location/context.
- Call + Directions CTAs.
- Google rating and current-listing review count shown visibly and sourced to Maps.
- Optional open/closed status calculated client-side in Dubai time using the published split hours.

### Proof strip

Three concise value facts:

- tabletop BBQ,
- banchan / comfort dishes,
- Barsha Heights hotel location.

### Experience

Editorial image/text split explaining the shared-table rhythm and table/kitchen grill choice.

### Menu discovery

No invented prices. Categories are based on public menu/review evidence:

- From the grill.
- Soups & comfort.
- Rice & classics.
- For the table.
- Korean drinks (with current-availability caveat).

### Story / differentiators

The story is the experience and location, not a fabricated founding legend.

### Gallery

A sequence built around the meal: grill → side dishes → rice → hot soup.

### Visit

Prominent address, split daily hours, phone, Instagram, Google Maps CTA and call CTA.

### Closing CTA

Food-led photography with repeat conversion actions.

## 10. Three.js / animation plan

Three.js is allowed only as a **progressive enhancement**.

Implementation:

- A lightweight transparent WebGL canvas sits over the photographic hero.
- A small field of ember-like particles drifts upward near the grill zone.
- It has no content value and is marked `aria-hidden`.
- The hero photograph, text and CTAs remain fully functional if the Three.js CDN or WebGL fails.
- Three.js is skipped entirely under `prefers-reduced-motion: reduce`.

Other animation:

- restrained scroll reveals via IntersectionObserver,
- subtle image scale on pointer hover,
- short button transitions.

No 3D food models, cursor games, autoplay hero video or gamification.

## 11. Responsive behavior

Mobile-first priorities:

- Call and Directions are always reachable from a fixed bottom control.
- Menu cards become one column.
- Gallery becomes horizontal scroll-snap.
- Hours remain visible without accordions.
- Touch targets are at least 44 px.

Tablet/desktop:

- Editorial split layouts.
- Larger asymmetric photography.
- Wider menu grid without simply stretching text lines.

## 12. Accessibility

- Semantic `header`, `nav`, `main`, `section`, `footer`, `dl`, headings.
- Single `h1`.
- Skip link.
- Keyboard-accessible mobile menu and Escape close behavior.
- Visible focus state.
- Meaningful alt text for informative photography.
- Decorative hero/CTA images use empty alt text.
- No important text embedded in images.
- Reduced-motion behavior.
- Core content and conversions work without JavaScript.
- Map is never the only source of the address.

## 13. Performance

- Static HTML/CSS/JS — no framework or build dependency.
- Responsive image URLs and lazy loading below the fold.
- Hero image preloaded and marked high priority.
- Explicit width/height on imagery to reduce layout shift.
- Three.js loads dynamically only after primary HTML/CSS content.
- WebGL uses low particle count and low-power renderer preference.
- No animation library or icon framework.

## 14. SEO / local discovery

Title:

**The Sky 2 Korean Restaurant Tecom | Korean BBQ in Barsha Heights, Dubai**

Meta description:

**Korean BBQ, warming soups and classic Korean dishes at The Sky 2 Korean Restaurant in Golden Tulip Media Hotel, Barsha Heights, Dubai. View hours, directions and call to reserve.**

Local-intent phrasing is used naturally around:

- Korean restaurant Barsha Heights,
- Korean BBQ Dubai,
- Korean BBQ Tecom,
- Korean food near Dubai Internet City.

Structured data:

- `Restaurant` JSON-LD with name, address, phone, cuisine, opening hours, map and verified Instagram.
- No unstable buffet pricing or self-serving aggregate rating markup.

Also included:

- canonical URL,
- Open Graph metadata,
- sitemap,
- robots file,
- custom 404 page.

## 15. Rights / licensing notes

Production-safe in the current build:

- Original UI/CSS/JS/SVG created for this repo.
- Creative Commons food photography with visible attribution and source/license documentation.
- Noto fonts delivered through Google Fonts.

Needs future replacement for strongest commercial launch:

- Current generic Korean-food photography should become restaurant-owned Sky 2 photography.

Not used in the deployed build:

- Google reviewer images,
- Zomato reviewer/gallery images,
- Restaurant Guru imagery,
- Wanderlog copies of reviewer images,
- other copyrighted editorial photos without a reuse license.

## 16. Implementation sequence

1. Verify repository and current evidence.
2. Build semantic static structure.
3. Apply mobile-first design system and responsive layout.
4. Add licensed real photography and attribution.
5. Add conversion actions and Dubai open/closed helper.
6. Add progressive Three.js hero enhancement.
7. Add metadata / JSON-LD / sitemap / robots / 404.
8. Validate HTML references and local file structure.
9. Commit implementation to `main`.
10. Publish the same commit through the `gh-pages` branch.
11. Verify GitHub Pages deployment/run and live URL.

## 17. Acceptance criteria

The implementation is accepted when:

- it looks specific to a Korean shared-grill restaurant rather than a generic template,
- Call and Directions are visible immediately on mobile,
- no unsupported prices, promotions, services or policies are invented,
- phone/address/hours are clearly displayed,
- real photography remains the primary visual medium,
- photography rights and restaurant-specificity are transparent,
- Three.js complements rather than replaces photography,
- JavaScript/WebGL failure leaves the site usable,
- reduced-motion behavior is implemented,
- keyboard navigation and focus states work,
- local SEO metadata and Restaurant JSON-LD are present,
- the repository contains this plan and image rights notes,
- the app is published through GitHub Pages.
