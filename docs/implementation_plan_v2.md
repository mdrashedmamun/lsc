# Implementation Plan - Hero V2: The Digital Sculpture

This plan implements the 2-group structural and aesthetic refinement for the Hero section, as discussed.

## Proposed Strategy
1.  **Preservation:** Keep the original design as `HeroV1.tsx`.
2.  **Implementation:** Create `HeroV2.tsx` as the new default.
3.  **Integration:** Update `App.tsx` to use `HeroV2`.

## Proposed Changes

### [Component Name] Hero Transformation

#### [NEW] [HeroV2.tsx](file:///Users/md.rashedmamun/Desktop/leveragestack/components/HeroV2.tsx)
- **Structure:** Two distinct groups (Problem and Solution) separated by a 100px vertical gap and a fading bronze separator.
- **Group 1 Styles:** 
    - "Your Expertise Shouldn't Be" (Satoshi 500, `text-white/30`).
    - "The Bottleneck." (Satoshi 800, `text-white/70`, tight line-height).
- **Group 2 Styles:** 
    - "It Should Be the Multiplier." (Satoshi 900, `text-bronze-metallic`, subtle glow/shadow, `tracking-tighter`).
- **Animations:** 
    - Staggered `reveal-up` for each group.
    - Subtle breathing opacity pulse for the "Multiplier" text.

#### [MODIFY] [App.tsx](file:///Users/md.rashedmamun/Desktop/leveragestack/App.tsx)
- Import `HeroV2` instead of `Hero`.
- The `Hero` file will remain in the codebase as `HeroV1` for quick restoration.

## Verification Plan

### Manual Verification (Browser)
1.  **Aesthetic Check:** Verify the "Shadow to Radiance" color transition.
2.  **Typography Check:** Confirm the Satoshi 800/900 weights are properly applied.
3.  **Responsiveness:** Ensure the 100px gap and massive text wrap cleanly on mobile.
4.  **Restoration Check:** Briefly swap back to `HeroV1` in `App.tsx` to ensure it still works perfectly.
