---
title: "Neo Theme Palette"
date: {{ .Date }}
draft: false
---

## Neo Brutalist Color Palette Showcase

This page demonstrates the neo-brutalist color palette integrated into this website.

### Base Theme Colors

**Dark Mode:**
<div class="p-4 bg-nb-dark-bg text-nb-dark-text border border-nb-dark-border">
  <p>This is text (nb-dark-text) on a dark background (nb-dark-bg) with a dark border (nb-dark-border).</p>
</div>

**Light Mode:**
<div class="p-4 bg-nb-light-bg text-nb-light-text border border-nb-light-border">
  <p>This is text (nb-light-text) on a light background (nb-light-bg) with a light border (nb-light-border).</p>
</div>
<div class="p-4 bg-nb-light-bg text-nb-light-text border border-nb-light-border">
  <input type="text" placeholder="Placeholder text (nb-light-placeholder)" class="bg-nb-light-placeholder p-2 rounded border border-nb-light-border text-nb-light-text placeholder-nb-light-text focus:border-logo-accent-cyan">
  <p class="text-xs mt-1">Input with nb-light-placeholder background (may need specific styling for placeholder text color if browser defaults interfere)</p>
</div>


### Logo Accents

Used for highlights, secondary actions, and non-card interactive elements.

<p class="p-2">
  This is a <a href="#" class="text-logo-accent-cyan hover:underline">link styled with logo-accent-cyan</a>.
</p>
<p class="p-2">
  And this is a <a href="#" class="text-logo-accent-teal hover:underline">link styled with logo-accent-teal</a>.
</p>
<button class="m-2 p-2 bg-logo-accent-cyan text-text-on-pop-bright rounded">Accent Button Cyan</button>
<button class="m-2 p-2 bg-logo-accent-teal text-text-on-pop-dark rounded">Accent Button Teal</button>


### Pop Colors for Cards

These colors are intended for card backgrounds or significant call-out sections.

**Darker Pop Colors (using text-on-pop-bright):**

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-4 bg-nb-pop-red text-text-on-pop-bright border border-nb-dark-border">nb-pop-red with text-on-pop-bright</div>
  <div class="p-4 bg-nb-pop-blue text-text-on-pop-bright border border-nb-dark-border">nb-pop-blue with text-on-pop-bright</div>
  <div class="p-4 bg-nb-pop-purple text-text-on-pop-bright border border-nb-dark-border">nb-pop-purple with text-on-pop-bright</div>
  <div class="p-4 bg-nb-pop-pink text-text-on-pop-bright border border-nb-dark-border">nb-pop-pink with text-on-pop-bright</div>
</div>

**Lighter Pop Colors (using text-on-pop-dark):**

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div class="p-4 bg-nb-pop-orange text-text-on-pop-dark border border-nb-light-border">nb-pop-orange with text-on-pop-dark</div>
  <div class="p-4 bg-nb-pop-yellow text-text-on-pop-dark border border-nb-light-border">nb-pop-yellow with text-on-pop-dark</div>
  <div class="p-4 bg-nb-pop-lime text-text-on-pop-dark border border-nb-light-border">nb-pop-lime with text-on-pop-dark</div>
  <div class="p-4 bg-nb-pop-mint text-text-on-pop-dark border border-nb-light-border">nb-pop-mint with text-on-pop-dark</div>
</div>

<br/>
<p class="text-sm">
  Note: The above elements use Tailwind CSS classes directly within the Markdown.
  The actual appearance will depend on Tailwind being correctly processed.
  The `border-nb-dark-border` and `border-nb-light-border` are added for context on cards.
</p>
