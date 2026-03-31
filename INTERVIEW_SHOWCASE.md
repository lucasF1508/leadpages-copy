# Interview Showcase - Leadpages Marketing Site

This document summarizes the work completed for technical interviews, with a focus on impact, decisions, and implementation challenges.

## 1) Project context

- Project: Leadpages marketing website.
- Architecture: monorepo with a Next.js web app and a Sanity CMS.
- Main goal: allow content editors to choose the "main hero post" for a blog section from CMS, instead of relying only on publish date ordering.

## 2) Implemented scope

### A. CMS (Sanity Studio)

- Added configuration support to select a featured post per blog section.
- Added a custom Studio input to improve editorial selection UX.
- Updated content schemas to support the new field without breaking existing content.

Related files:

- `packages/studio/components/BlogSectionMainHeroInput.tsx`
- `packages/studio/schema/documents/templates/post.ts`
- `packages/studio/legacy/schema/documents/templates/schemaPost.jsx`

### B. Frontend (Next.js)

- Updated the GROQ query layer to fetch the CMS-selected hero post.
- Updated blog section rendering to prioritize the selected post.
- Adjusted layout components to preserve visual consistency and fallback behavior.

Related files:

- `apps/web/src/app/lib/queries/groq.ts`
- `apps/web/src/app/components/BlogSection/BlogSection.tsx`
- `apps/web/src/app/components/BlogSection/BlogSection.types.ts`
- `apps/web/src/app/components/BlogPostLayout/BlogPostLayout.tsx`

### C. Supporting UI updates

- Minor updates in supporting components used by the blog/home flow.

Related files:

- `apps/web/src/app/components/SocialMedia/SocialMedia.tsx`
- `apps/web/src/app/components/SubFooter/SubFooter.tsx`

## 3) Technical challenges and solutions

### Challenge 1: Preserve backward compatibility with existing content

Problem:

- Historical content did not include the new editorial "main hero post" field.

Solution:

- Added fallback behavior: when no post is explicitly selected, the frontend keeps the previous logic (default post ordering).

Result:

- No blocking migration was required to release the improvement.

### Challenge 2: Keep the CMS <-> Frontend contract aligned

Problem:

- Any schema change not reflected in queries/rendering could break the blog hero.

Solution:

- Updated schema, types, and query in parallel to ensure end-to-end data consistency.

Result:

- Lower risk of null/invalid data and better production stability.

### Challenge 3: Avoid visual regressions

Problem:

- The hero block and connected components could become inconsistent when changing the post source.

Solution:

- Applied targeted layout/component adjustments and validated the full real-world flow.

Result:

- Preserved the expected UX without impacting other pages.

## 4) How this work is validated

Functional checklist:

- In Sanity, select a post as the main hero for a blog section.
- Publish and verify the hero displays that post in the frontend.
- Remove selection and verify fallback behavior works correctly.
- Validate links, featured image, and post metadata in the hero block.

Technical checklist:

- Run project lint checks.
- Verify `web` workspace build.
- Test with environment variables linked from Vercel.

## 5) Editorial and business impact

- Gives editorial teams direct control over blog priority content.
- Improves strategic content promotion without date-based workarounds.
- Reduces content team friction for campaigns and launches.

## 6) Interview notes

If you need to present this in 2-3 minutes:

- Problem: "The blog hero was not editor-configurable."
- Solution: "We added main post selection in Sanity and connected it to frontend rendering with safe fallback behavior."
- Value: "More content control, fewer manual operations, and no breakage of legacy content."
