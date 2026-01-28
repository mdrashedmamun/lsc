# Implementation Plan - Design Consistency & Strict UI/UX Refinement

This plan addresses font unification to **Satoshi**, alignment fixes in the `ProblemSection`, and ensures the entire interface adheres to strict technical UI/UX standards.

## User Decisions
- **Font Choice:** Unify all text to **Satoshi**.
- **Execution Standards:** Adhere to the "BUCKET 1 — TECHNICAL UI / UX & DESIGN EXECUTION" criteria.

## Proposed Changes

### [Component Name] Global Styles & Layout

#### [MODIFY] [index.html](file:///Users/md.rashedmamun/Desktop/leveragestack/index.html)
- Update `fontFamily` config in Tailwind to set `serif` and `display` to `Satoshi`.
- Update the editorial typographic system ( `.text-h1`, `.text-h2`, `.text-h3`) to use `Satoshi` instead of `Playfair Display`.
- Adjust font weights for headers to ensure "authority" without the serif aesthetic (e.g., `font-black` or `font-bold`).
- Ensure line lengths are comfortable for Satoshi (readability audit).

### [Component Name] Section Refinement

#### [MODIFY] [ProblemSection.tsx](file:///Users/md.rashedmamun/Desktop/leveragestack/components/ProblemSection.tsx)
- Adjust the layout of the "Growth Stops With You" section.
- Change `items-end` to `items-start` for better balance with wide Satoshi text.
- Tighten the gap and grid span to prevent visual disconnection on large screens.

---

## Success Factors & Acceptance Criteria (BUCKET 1 Compliance)

### A. Layout & Visual Structure
- [ ] **Visual Hierarchy:** Hero > Subhead > CTA is instantly clear via size and weight.
- [ ] **Section Spacing:** Consistent vertical padding (e.g., `pt-32 pb-32` or similar) prevents crowding.
- [ ] **Grid Alignment:** All sections align to the `max-w-7xl` container.
- [ ] **Visual Rhythm:** Alternating content density while scrolling.

### B. Typography & Readability (Satoshi Unification)
- [ ] **Max 2 Font Families:** Only Satoshi is used (Playfair Display removed).
- [ ] **Clear Distinction:** Hierarchy achieved through weight (Black/Bold for headers, Light/Regular for body) and tracking for meta text.
- [ ] **Line Length:** Body text width limited on large screens for comfort.
- [ ] **Text Weight:** Body text is legible (min 300-400 weight).

### C. Color & Visual Restraint
- [ ] **Limited Palette:** Stick to Emerald 950, Bronze Metallic, and Cream.
- [ ] **Restraint:** No new glows or excessive gradients added.

### D. Interaction & Usability
- [ ] **Tappable Buttons:** All buttons are easily clickable on both desktop and mobile.
- [ ] **Consistent CTA:** Primary CTA style remains consistent throughout the page.

### E. Mobile Experience
- [ ] **Clean Wrapping:** Headline "Growth Stops With You" wraps without awkward breaks on small screens.
- [ ] **Thumb Reachability:** CTAs are placed for easy mobile interaction.
- [ ] **No Shifts:** No CLS (Cumulative Layout Shift) or clipping.

### F. Performance & Polish
- [ ] **Fast Load:** Unused fonts (Playfair Display) removed from `<head>` to optimize.
- [ ] **No Placeholders:** Final copy and assets used everywhere.

---

## Verification Plan

### Automated Tests
- None.

### Manual Verification (Browser)
1.  **Satoshi Audit:** Inspect every text element to ensure no "Playfair Display" remains.
2.  **Alignment Audit:** Direct comparison of the `ProblemSection` with the provided screenshot to ensure the spatial relationship "makes sense".
3.  **Strict Criteria Checklist:** Walk through the "Bucket 1" list item by item to confirm compliance.
4.  **Responsive Check:** Validate all mobile criteria (F, E, D) using Chrome DevTools.
