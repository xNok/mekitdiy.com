# Palette's Journal

Critical UX and accessibility learnings for the MekitDIY / Neo theme website.

## 2026-11-03 - Active Section Navigation State and Accessible Semantics
**Learning:** In static sites built with Hugo, header navigation links can easily become disconnected from the user's current browsing location if section context (`.Section`) isn't evaluated. For assistive technology, omitting `aria-current="page"` leaves screen reader users without orientation cues. Visually, in a neo-brutalist theme, an active pop-color badge with high contrast (`bg-nb-pop-yellow text-text-on-pop-dark shadow-neo border-2 border-nb-light-border`) provides immediate orientation without disturbing link focus indicators (`focus-visible:ring-2 focus-visible:ring-nb-pop-yellow`).
**Action:** When creating or maintaining header navigation in Hugo themes, inspect `.Section` to conditionally attach `aria-current="page"` and active theme styling, while preserving keyboard focus-visible outlines.
