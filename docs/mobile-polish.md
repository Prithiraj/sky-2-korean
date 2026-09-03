# Mobile Polish Pass

This document records the focused mobile refinement applied after the initial launch review. It supplements `docs/design-plan.md` and does not change the core creative direction.

## Goals

- Keep the cinematic food-first presentation while exposing more useful content sooner.
- Reduce unnecessary vertical scrolling on phones and tablets.
- Preserve the persistent Call / Directions conversion bar.
- Harden the mobile navigation layering and keyboard behavior.
- Improve iPhone safe-area behavior.
- Keep desktop presentation unchanged.

## Changes

### Hero

- Mobile hero height is viewport-aware using `svh`, with pixel fallbacks for older browsers.
- Phone headline scaling is reduced from the original 16vw treatment to a calmer 14vw behavior.
- Top/bottom spacing and hero metadata spacing are tightened so key CTAs remain prominent without making the opening screen unnecessarily tall.

### Navigation

- Removed reliance on negative stacking for the collapsed mobile navigation.
- Closed navigation is now `visibility: hidden` and `pointer-events: none`, preventing hidden links from becoming accidental interaction targets.
- Open navigation uses an explicit positive stacking layer beneath the fixed header.

### Content density

- Large fixed minimum heights are removed from mobile menu cards and differentiator cards.
- Food media uses responsive, capped heights rather than oversized card minimums.
- The experience image uses a viewport-capped height so full-width tablet layouts do not become excessively tall.
- Mobile section spacing is slightly reduced.
- Closing CTA height is reduced on phones.

### Gallery

- Gallery cards are slightly narrower and use a 4:5 ratio.
- Touch scrolling gets containment and momentum scrolling behavior.

### Conversion bar / safe areas

- Bottom padding and the persistent mobile action bar account for `env(safe-area-inset-bottom)` on devices with a home indicator.
- Conversion touch targets remain at least 48–50px high.

### Reduced motion

- Existing reduced-motion behavior remains in force, including disabling the decorative WebGL/Three.js layer.

## Acceptance checks

- No horizontal overflow at 320px, 360px, 375px, 390px, 414px, 768px, or 820px widths.
- Hero CTA remains visible without awkward overlap on common portrait phones.
- Closed mobile navigation cannot receive pointer interaction.
- Call and Directions remain reachable above device safe areas.
- Menu cards no longer create unnecessary fixed-height whitespace.
- Full-width tablet photography remains capped rather than becoming taller due to aspect-ratio expansion.
- Gallery remains swipeable with visible next-card affordance.
- Desktop layout at widths above 900px remains unchanged.
