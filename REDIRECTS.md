# Code Redirects (App Only)

This document lists only redirects and URL behavior defined in `apps/web` code.

---

## 1. Redirects in `apps/web/next.config.js`

Hardcoded rules:

| Source | Destination | Type |
| ------ | ----------- | ---- |
| `/templates/landing-page-template/:slug` | `/templates/landing-page-template-new/:slug` | Temporary (`permanent: false`) |
| `/page-studio-templates` | `/template-inspiration` | Permanent |
| `/page-studio-templates/:path*` | `/template-inspiration/:path*` | Permanent |

---

## 2. Rewrites in `apps/web/next.config.js` (not HTTP redirects)

- `/studio/:path*` rewrites to Studio.
- `/home` rewrites to `/`.

This changes the internal destination, but does not always return a browser-visible 3xx.

---

## 3. Redirects and rewrites in `apps/web/src/middleware.js`

Important cases:

- **410 Gone** for paths in the generated gone list.
- **Preview cookie:** rewrites `/home-...` style routes to `/home...`.
- **Tracking cookie (`__lptp`):** if query params are missing from the URL, it redirects to re-add them.
- **Legacy incremental paths:** rewrites matching paths to `/_legacy{pathname}`.
- **A/B tests:** may redirect (variant -> control) or rewrite (control -> variant).

Useful debug header: `x-from-middleware`.

---

## 4. Redirects in preview and actions

- `apps/web/src/app/(pages)/preview/route.ts` uses `NextResponse.redirect(..., 307)`.
- `apps/web/src/pages/api/preview.js` uses `res.redirect(307, ...)`.
- `apps/web/src/app/(pages)/actions.ts` uses `redirect()` from `next/navigation`.

---

## 5. Quick debug checklist

1. If this is a public old/new URL issue, check `next.config.js`.
2. If behavior depends on cookies, check `middleware.js`.
3. If it only happens in preview, check preview routes.
4. If content changes without a visible 3xx, it is likely a rewrite.

---

*This document excludes CMS-only content rules and focuses only on app code.*
