# Changeset: Neo-Brutalist Palette Integration

Date: 2025-05-26

## Summary

This changeset introduces a new neo-brutalist color palette to the website, updates existing elements to use this palette, and adds a new "Neo Theme" page to showcase the colors and elements.

## Changes

### 1. Tailwind Configuration Update
- **File:** `website/themes/neo/tailwind.config.js`
- **Action:** Populated the Tailwind configuration with the new neo-brutalist color palette. This includes:
    - Dark and Light mode base colors (backgrounds, text, borders).
    - Logo accent colors (cyan, teal).
    - A range of "pop" colors for card backgrounds (red, orange, yellow, lime, mint, blue, purple, pink).
    - Dedicated text colors for use on pop color backgrounds (`text-on-pop-bright`, `text-on-pop-dark`).

### 2. "Neo Theme" Page Creation
- **File:** `website/content/neo-theme/_index.md`
- **Action:** Created a new page accessible at `/neo-theme/`.
- **Content:** This page serves as a style guide, demonstrating:
    - Base theme colors (dark/light mode examples).
    - Logo accent colors on links and buttons.
    - All "pop" colors on card-like elements with appropriate text colors.
    - Example of an input field with placeholder styling.

### 3. Footer Link
- **File:** `website/themes/neo/layouts/partials/footer.html`
- **Action:** Added a link in the website footer pointing to the new "Neo Theme" page. The link is styled using `text-logo-accent-cyan`.

### 4. Application of New Palette to Existing Theme Elements
- **Affected Files:** Various `*.html` files within `website/themes/neo/layouts/` (including `partials/header.html`, `partials/footer.html`, default layouts, and specific layouts for blog/projects).
- **Action:** Updated existing UI elements to use the new color palette. This involved:
    - Replacing old theme color classes (e.g., `bg-neo-black`, `text-neo-white`, `text-neo-pink`, `text-neo-yellow`) with their corresponding new neo-brutalist palette classes (e.g., `bg-nb-dark-bg`, `text-nb-dark-text`, `text-nb-pop-pink`, `text-nb-pop-yellow`).
    - Ensuring consistent application of dark/light mode base colors and accent colors.
    - Updating button styles to use pop colors with appropriate foreground text colors.

## Notes
- The "Neo Theme" page uses Tailwind CSS classes directly in Markdown for demonstration.
- The changes aim to provide a comprehensive visual update in line with the neo-brutalist design direction.
