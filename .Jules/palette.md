## 2025-05-18 - Skip-to-content accessibility pattern in custom Hugo themes
**Learning:** Custom Hugo base templates (`baseof.html`) often omit skip links, leaving keyboard and screen reader users forced to tab through repeated top navigation links on every page load.
**Action:** Always include an accessible `Skip to content` link targeted at `<main id="content">` as the first focusable element inside `<body>` in Hugo base templates.
