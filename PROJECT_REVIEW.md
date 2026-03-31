# Project Guide for Sanity Users

Quick guide on what to watch for when editing content in this project, with a non-technical focus.

---

## What this site is

- This is the Leadpages marketing website.
- Content is managed in Sanity.
- Changes published in Sanity affect public pages on the site.

---

## Most important things for day-to-day work

- **Check the page type before editing:** home, blog, templates, and marketing pages do not always use the same blocks.
- **Be careful with the URL (`path`):** changing it can affect SEO, internal links, and campaign traffic.
- **Review images and long text:** some sections can break visually if copy length or image proportions are off.
- **Publishing may not appear instantly:** cache or preview behavior can delay what you see; confirm on the final URL.
- **Do not delete older content without validation:** it may still be used for comparisons, redirects, or internal references.

---

## Simple pre-publish checklist

1. Title and meta description are complete.
2. Slug/path is correct and does not conflict with another page.
3. CTAs point to valid destinations.
4. No broken links or missing images.
5. Mobile version was reviewed.
6. Changes were verified in preview and then in production.

---

## Sections where issues are more common

- **Home:** highly visible changes; review hero and primary blocks carefully.
- **Templates:** categories, filters, and cards should stay consistent.
- **Blog:** check formatting, featured content, and links between posts.
- **Older landing pages:** some may have special behavior or redirect rules.

---

## Content best practices

- Use clear and consistent naming for internal titles.
- Keep block structure similar across pages of the same type.
- Avoid creating near-duplicate pages; reuse components when possible.
- Document major updates in an internal note (Notion/Jira).
- Coordinate with SEO when changing URLs or main headlines.

---

## Useful documents

- [README.md](./README.md) — project-wide context.
- [BLOG_MIGRATION_GUIDE.md](./BLOG_MIGRATION_GUIDE.md) — blog migration guide.
- [apps/web/GUIA_CREAR_TEMPLATE_DESDE_CERO.md](./apps/web/GUIA_CREAR_TEMPLATE_DESDE_CERO.md) — create templates from scratch.
- [apps/web/GUIA_PASO_A_PASO_CREAR_TEMPLATES.md](./apps/web/GUIA_PASO_A_PASO_CREAR_TEMPLATES.md) — step-by-step template guide.
- [REDIRECTS.md](./REDIRECTS.md) — redirect rules defined in code.

---

## Recommendations for the content team

- Define a 5-minute QA flow before publishing.
- Maintain a list of critical URLs (home, pricing, templates, main blog pages).
- Assign clear owners for approving path/URL changes.
- Track every new redirect when content is moved.

---

*If needed, we can also create a separate technical guide for engineering teams.*
